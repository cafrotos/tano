import { Text } from "@ui-kitten/components";
import StackedBarchart from "components/Charts/StackedBarchart";
import { TRANS_TYPE } from "configs";
import _ from "lodash";
import React, { useEffect, useMemo } from "react";
import { View } from "react-native";
import { getTransBooks } from "repositories/transBooks";
import { collections } from "services/firebase/firestore";
import useLoadState from "services/hooks/useLoadState";

export default ({
  transactions
}) => {
  const [user, , loadUser] = useLoadState({
    onGetState: () => collections.getUserDoc().get(),
    mapping: (dataSource) => dataSource.data()
  })
  const [totalTransBook, , loadTransBook] = useLoadState({
    onGetState: getTransBooks,
    mapping: (dataSource) => ({
      amountIn: _.sumBy(dataSource, "amountIn"),
    })
  })

  const payments = useMemo(() => {
    if (user.dataSource?.plan?.groups && transactions?.length) {
      const _splitTotalAmountIn = {};
      const userPlanGroups = user.dataSource.plan.groups.map(group => {
        _splitTotalAmountIn[group.name] = totalTransBook.dataSource.amountIn * group.value
        return group.name
      })
      const transactionGroupByPlanGroup = _.groupBy(
        transactions
          .filter(_trans => _trans.type === TRANS_TYPE.OUTPUT.value)
          .map(_trans => ({
            ..._trans,
            planGroup: _trans.transGroup.groups.filter(group => userPlanGroups.includes(group)).pop()
          })),
        (v) => v.planGroup
      )
      Object.keys(transactionGroupByPlanGroup)
        .map((key, index) => {
          const totalTransOut = _.sumBy(transactionGroupByPlanGroup[key], (_trans) => Math.abs(_trans.amount))
          _splitTotalAmountIn[key] = {
            amount: _splitTotalAmountIn[key],
            data: [
              totalTransOut,
              _splitTotalAmountIn[key] > totalTransOut ? _splitTotalAmountIn[key] - totalTransOut : 0,
              _splitTotalAmountIn[key] > totalTransOut ? 0 : totalTransOut - _splitTotalAmountIn[key],
            ]
          }
        })
      const analysis = {
        notInUseYet: [],
        paymentOut: []
      }
      const resultAnalysis = []
      const result = {
        labels: Object.keys(_splitTotalAmountIn)
          .map(key => {
            typeof _splitTotalAmountIn[key] !== "object" && !["SAVE", "FFA"].includes(key) && analysis.notInUseYet.push(key)
            typeof _splitTotalAmountIn[key] === "object" &&
              _splitTotalAmountIn[key].data[_splitTotalAmountIn[key].data.length - 1] !== 0 &&
              analysis.paymentOut.push(key)
            return key
          }),
        data: Object.values(_splitTotalAmountIn)
          .map(_data => {
            if (_data.data) {
              return _data.data
            }
            return [0, _data.amount || _data, 0]
          })
      }
      if (analysis.paymentOut.length === 0) {
        resultAnalysis.push("M???i th??? v???n ??ang trong t???m ki???m so??t")
      }
      else {
        resultAnalysis.push("B???n ???? ti??u qu?? h???n m???c m?? ph????ng ph??p ????? ra, c???n ch?? ?? nh???ng kho???n chi ti??u kh??ng h???p l?? trong: `" + analysis.paymentOut.join(", ") + "`")
      }
      if (analysis.notInUseYet.length) {
        resultAnalysis.push("B???n n??n b???t ?????u s??? d???ng nh???ng kho???n ti???n trong qu???: `" + analysis.notInUseYet.join(", ") + "` ????? ?????u t?? v??o b???n th??n th??m nh??!")
      }
      return {
        ...result,
        resultAnalysis
      }
    }
  }, [transactions, user, totalTransBook])

  useEffect(() => {
    loadUser()
    loadTransBook()
  }, [])

  return (
    <>
      <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
        {"Bi???u ????? h???n m???c thanh to??n"}
      </Text>
      <StackedBarchart
        labels={payments?.labels}
        data={payments?.data}
      />
      <View
        style={{
          paddingHorizontal: 16
        }}
      >

        <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
          {"????nh gi?? k???t qu??? b??o c??o"}
        </Text>
        {
          payments?.resultAnalysis?.map((message, index) => (
            <Text category="s2" key={index}>
              {message}
            </Text>
          ))
        }
      </View>
    </>
  )
}