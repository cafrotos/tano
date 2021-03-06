import { Button, Divider, ListItem, Text } from "@ui-kitten/components";
import React, { useCallback } from "react";
import TotalAmount from "components/TotalAmount";

import TransItem from "components/TransItem";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import Space from "components/Space";
import { buttonStyle, commonStyles } from "assets/styles";
import useLoadState from "services/hooks/useLoadState";
import { getTransBookByDoc } from "repositories/transBooks";
import { getTransactions } from "repositories/transactions";
import { RefreshControl, SectionList, View } from "react-native";
import moment from "moment";
import _ from "lodash";
import { useEffect } from "react/cjs/react.development";
import ButtonEditTransBook from "./ButtonEditTransBook";
import { formatNumber } from "utils";
import { TanoButtonSubmit } from "components/TanoButton";
import TanoLayout from "components/TanoLayout";

const DetailTransBook = () => {
  const navigation = useNavigation()
  const { params } = useRoute(params)
  const [transBook, , loadTransBook] = useLoadState({
    onGetState: () => getTransBookByDoc(params?.transBook?.id)
  })
  const [transactions, , loadTransactions] = useLoadState({
    onGetState: () => getTransactions(params?.transBook?.id, (transCol) => transCol
      .orderBy("date", "desc")
      .get()),
    mapping: (dataSource) => {
      return Object
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
          totalAmount: formatNumber(_.sumBy(data, (item) => Number(item.amount || 0))),
          data
        }))
    }
  })

  useEffect(() => {
    navigation.setParams({
      ...params,
      transBook: transBook.dataSource
    })
  }, [transBook])

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [])
  );

  const loadData = () => Promise.all([
    loadTransactions(),
    loadTransBook()
  ])
  const handlePressCreateTrans = () => navigation.navigate(NAMES.CREATE_TRANSACTION, {
    screen: NAMES.CREATE_TRANSACTION,
    params
  })

  return (
    <TanoLayout>
      <TotalAmount
        total={transBook.dataSource?.amount || 0}
      />
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
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section: { title, totalAmount } }) => (
          <ListItem
            title={title}
            disabled={true}
            accessoryRight={() => <Text category="c1">{totalAmount}</Text>}
          />
        )}
        renderSectionFooter={() => <Divider style={{ height: 8, backgroundColor: "transparent" }} />}
        ListFooterComponent={() => <Divider style={{ height: 64, backgroundColor: "transparent" }} />}
      />
      <TanoButtonSubmit
        onPress={handlePressCreateTrans}
      >
        {"T???o giao d???ch"}
      </TanoButtonSubmit>
    </TanoLayout>
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
    headerRight: ButtonEditTransBook,
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
          {route.params?.transBook?.name}
        </Text>
      </Space>
    )
  })
}