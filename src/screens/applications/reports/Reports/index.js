import { useFocusEffect } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import _ from "lodash";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { getTransactions } from "repositories/transactions";
import useLoadState from "services/hooks/useLoadState";
import { formatNumber } from "utils";
import TransBarchart from "./TransBarchart";

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  useShadowColorFromDataset: false, // optional
  barPercentage: 0.75,
  decimalPlaces: 0,
  strokeWidth: 2,
  fillShadowGradientOpacity: 0.6,
  formatYLabel: (yLabel) => formatNumber(yLabel, "0,0 a $")
};

const Reports = () => {
  const [transactions, , loadTransactions] = useLoadState({
    onGetState: () => getTransactions((transCol) => transCol
      // .where("transBook", "==", params?.transBook?.id)
      .orderBy("date", "asc")
      .get()),
  })

  const transByDay = useMemo(() => Object
    .values(_.groupBy(
      transactions.dataSource
        .map(item => ({
          ...item,
          date: moment(new Date(item.date?.seconds * 1000)).format("L")
        })),
      "date"
    ))
    .map(data => ({
      negative: _.sumBy(
        data
          .filter(item => Number(item.amount) < 0),
        item => Number(item.amount)
      ),
      positive: _.sumBy(
        data
          .filter(item => Number(item.amount) > 0),
        item => Number(item.amount)
      ),
      label: data[0].date.split("/").slice(0, -1).join("/")
    })), [transactions])

  useFocusEffect(
    useCallback(() => {
      loadTransactions()
    }, [])
  );

  return (
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
    >
      <TransBarchart transactions={transByDay} />
    </ScrollView>
  )
}

export default {
  name: NAMES.REPORTS,
  component: Reports
}