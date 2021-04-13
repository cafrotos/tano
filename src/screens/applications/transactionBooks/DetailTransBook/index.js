import { Divider, Layout, List, Text } from "@ui-kitten/components";
import React, { useCallback } from "react";
import TotalAmount from "components/TotalAmount";

import { _mockDetailTransBook } from "configs/mockups"
import TransItem from "components/TransItem";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import ButtonCreateTrans from "./ButtonCreateTrans";
import Space from "components/Space";
import { commonStyles } from "assets/styles";
import useLoadState from "services/hooks/useLoadState";
import { getTransBookByDoc } from "repositories/transBooks";
import { getTransactions } from "repositories/transactions";
import { RefreshControl, SectionList, View } from "react-native";
import moment from "moment";
import _ from "lodash";

const DetailTransBook = () => {
  const navigation = useNavigation()
  const { params } = useRoute(params)
  const [transBook, setTransBook, loadTransBook] = useLoadState({
    onGetState: () => getTransBookByDoc(params?.transBook?.id)
  })
  const [transactions, , loadTransactions] = useLoadState({
    onGetState: () => getTransactions((transCol) => transCol
      .where("transBook", "==", params?.transBook?.id)
      .orderBy("date", "desc")
      .get()),
    mapping: (dataSource) => Object
      .values(_.groupBy(
        dataSource
          .map(item => ({
            ...item,
            date: moment(new Date(item.date?.seconds * 1000)).format("LL")
          })),
        "date"
      ))
      .map(data => ({
        title: data[0].date,
        data
      }))
  })

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [])
  );

  const loadData = () => {
    const promisesLoadData = [loadTransactions()];
    if (!params?.transBook?.amount) {
      promisesLoadData.push(loadTransBook())
    }
    else {
      setTransBook(params.transBook)
    }
    return Promise.all(promisesLoadData)
  }

  return (
    <>
      <TotalAmount
        total={transBook.dataSource?.amount || 0}
      />
      {/* <List
        refreshControl={
          <RefreshControl
            refreshing={transBook.loading || transactions.loading}
            onRefresh={loadData}
          />
        }
        data={transactions.dataSource}
        ItemSeparatorComponent={Divider}
        renderItem={TransItem}
      /> */}
      <SectionList
        refreshControl={
          <RefreshControl
            refreshing={transBook.loading || transactions.loading}
            onRefresh={loadData}
          />
        }
        sections={transactions.dataSource}
        keyExtractor={(item, index) => item + index}
        renderItem={TransItem}
        SectionSeparatorComponent={() => <Divider style={{ height: 8 }} />}
        renderSectionHeader={({ section: { title } }) => (
          <Layout level="1" style={{ position: "relative", height: 30 }}>
            <Layout level="1" style={{ position: "absolute", width: "100%", bottom: -8, height: 38, justifyContent: "center" }}>
              <Text>{title}</Text>
            </Layout>
          </Layout>
        )}
      />
    </>
  )
}

export default {
  name: NAMES.DETAIL_TRANS_BOOK,
  component: DetailTransBook,
  options: ({ route }) => ({
    headerStyle: {
      backgroundColor: themes["color-primary-500"],
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0
    },
    headerTintColor: '#fff',
    headerRight: ButtonCreateTrans,
    headerTitle: (
      <Space
        direction="vertical"
        size={0.25}
        style={[
          commonStyles.flexVerticalCenter,
          commonStyles.flexVerticalMiddle,
        ]}
      >
        <Text category="s1" style={[commonStyles.textColorWhite]}>
          {route.name}
        </Text>
        <Text category="c2" style={[commonStyles.textColorWhite]}>
          {route.params.transBook.name}
        </Text>
      </Space>
    )
  })
}