import { Text } from "@ui-kitten/components";
import Circlechart from "components/Charts/Circlechart";
import { _mockupTransGroupColors } from "configs/mockups";
import _ from "lodash";
import React, { useMemo } from "react";

export default ({
  transactions
}) => {
  const payments = useMemo(() => {
    const transactionGroupByGroup = _.groupBy(transactions.filter(_trans => _trans.amount < 0), (v) => v.transGroup.title)
    return Object.keys(transactionGroupByGroup)
      .map((key, index) => ({
        name: key,
        amount: _.sumBy(transactionGroupByGroup[key], _trans => Math.abs(Number(_trans.amount))),
        color: _mockupTransGroupColors[key],
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }))
  }, [transactions])
  const refunds = useMemo(() => {
    const transactionGroupByGroup = _.groupBy(transactions.filter(_trans => _trans.amount > 0), (v) => v.transGroup.title)
    return Object.keys(transactionGroupByGroup)
      .map((key, index) => ({
        name: key,
        amount: _.sumBy(transactionGroupByGroup[key], _trans => Math.abs(Number(_trans.amount))),
        color: _mockupTransGroupColors[key],
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }))
  }, [transactions])

  return (
    <>
      {
        payments?.length ? (
          <>
            <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
              {"Biểu đồ danh mục chi"}
            </Text>
            <Circlechart
              data={payments}
              accessor="amount"
            />
          </>
        ) : null
      }
      {
        refunds.length ? (
          <>
            <Text category="s1" style={{ fontSize: 20, marginLeft: 24, paddingVertical: 16 }}>
              {"Biểu đồ danh mục thu"}
            </Text>
            <Circlechart
              data={refunds}
              accessor="amount"
            />
          </>
        ) : null
      }
    </>
  )
}