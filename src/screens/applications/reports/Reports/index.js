import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/core";
import { Button, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import TanoLayout from "components/TanoLayout";
import { _mockupSelectTimes } from "configs/mockups";
import { NAMES } from "configs/screens";
import _ from "lodash";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { getTransactions } from "repositories/transactions";
import useLoadState from "services/hooks/useLoadState";
import PaymentLimitChart from "./PaymentLimitChart";
import SelectTIme from "./SelectTIme";
import TransBarchart from "./TransBarchart";
import TransCirclechar from "./TransCirclechar";


const Reports = () => {
  const { params } = useRoute()
  const navigation = useNavigation()
  const scrollRef = useRef()
  const _params = useMemo(() => Object.assign({}, params || { time: _mockupSelectTimes[0] }), [params])

  const [queryDate, setQueryDate] = useState(moment())
  const [transactions, , loadTransactions] = useLoadState({
    onGetState: ({ start, end }) => getTransactions(null, (transCol) => transCol
      .where("date", "<=", end)
      .where("date", ">=", start)
      .orderBy("date", "asc")
      .get())
  })

  const transByTime = useMemo(() => {
    return Object
      .values(_.groupBy(
        transactions.dataSource
          .map(item => ({
            ...item,
            date: moment(new Date(item.date?.seconds * 1000)),
            label: moment(new Date(item.date?.seconds * 1000)).format(_params.time.formatChart)
          })),
        "label"
      ))
      .map(data => ({
        negative: data
          .filter(item => Number(item.amount) < 0),
        positive: data
          .filter(item => Number(item.amount) > 0),
        label: _params.time.getLabel(data[0].date)
      }))
  }, [transactions, params])

  useFocusEffect(
    useCallback(() => {
      const rangeDate = _params.time.formatRange(queryDate)
      loadTransactions(rangeDate)
    }, [_params, queryDate])
  );

  const handleSetDate = (number) => () => {
    const newQueryDate = queryDate.add(number, _params.time.format)
    setQueryDate(newQueryDate)
    navigation.setParams({
      ..._params,
      queryDate: newQueryDate
    })
    scrollRef.current.scrollTo(0)
  }

  return (
    <TanoLayout>
      <ScrollView
        style={{
          height: "100%",
          backgroundColor: "white"
        }}
        refreshControl={
          <RefreshControl
            refreshing={transactions.loading}
            onRefresh={loadTransactions}
          />
        }
        ref={scrollRef}
      >
        <TransBarchart transactions={transByTime} />
        <TransCirclechar transactions={transactions.dataSource} />
        <PaymentLimitChart transactions={transactions.dataSource} />
        <View
          style={[
            commonStyles.flexHorizontalBetween,
            commonStyles.flexHorizontalMiddle,
            {
              padding: 16
            }
          ]}
        >
          <Button
            accessoryLeft={renderIcon({ name: "arrowhead-left" })}
            style={{
              borderRadius: 40
            }}
            onPress={handleSetDate(-1)}
          >
            {`${_params.time.name} trước`}
          </Button>
          <Button
            accessoryRight={renderIcon({ name: "arrowhead-right" })}
            style={{
              borderRadius: 40
            }}
            disabled={moment().format(_params.time.format) === queryDate.format(_params.time.format)}
            onPress={handleSetDate(1)}
          >
            {`${_params.time.name} sau`}
          </Button>
        </View>
      </ScrollView>
    </TanoLayout>
  )
}

export default {
  name: NAMES.REPORTS,
  component: Reports,
  options: ({ route }) => ({
    headerRight: SelectTIme,
    headerTitle: (
      <Space
        direction="vertical"
        size={0.25}
        style={[
          commonStyles.flexVerticalCenter,
          commonStyles.flexVerticalMiddle,
        ]}
      >
        <Text category="s1">
          {route.name}
        </Text>
        <Text category="c2">
          {(route.params?.time || _mockupSelectTimes[0]).name + " " + ((route.params?.time || _mockupSelectTimes[0]).title((moment(route.params?.queryDate))))}
        </Text>
      </Space>
    )
  }),
  initialParams: {
    time: _mockupSelectTimes[0]
  }
}