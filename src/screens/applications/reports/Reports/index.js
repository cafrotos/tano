import { useFocusEffect } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import _ from "lodash";
import moment from "moment";
import React, { useCallback, useEffect, useMemo } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { getTransactions } from "repositories/transactions";
import useLoadState from "services/hooks/useLoadState";
import PaymentLimitChart from "./PaymentLimitChart";
import TransBarchart from "./TransBarchart";
import TransCirclechar from "./TransCirclechar";


const Reports = () => {
  const [transactions, , loadTransactions] = useLoadState({
    onGetState: () => getTransactions(null, (transCol) => transCol
      .orderBy("date", "asc")
      .get()),
  })

  const transByDay = useMemo(() => Object
    .values(_.groupBy(
      transactions.dataSource
        .map(item => ({
          ...item,
          date: moment(new Date(item.date?.seconds * 1000)),
          label: moment(new Date(item.date?.seconds * 1000)).format("w")
        })),
      "label"
    ))
    .map(data => ({
      negative: data
        .filter(item => Number(item.amount) < 0),
      positive: data
        .filter(item => Number(item.amount) > 0),
      label: `${data[0].date.startOf("w").format("DD")}-${data[0].date.endOf("w").format("DD")}`
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
      <TransCirclechar transactions={transactions.dataSource} />
      <PaymentLimitChart transactions={transactions.dataSource} />
    </ScrollView>
  )
}

export default {
  name: NAMES.REPORTS,
  component: Reports
}