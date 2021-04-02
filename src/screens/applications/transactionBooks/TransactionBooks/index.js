import { Divider, Layout, List } from "@ui-kitten/components";
import React, { useMemo } from "react";
import TotalAmount from "components/TotalAmount";

import { _mockDetailReport } from "configs/mockups"
import TransBookItem from "components/TransBookItem";
import { useNavigation } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import ButtonCreateBook from "./ButtonCreateBook";

const TransactionBooks = () => {
  const navigation = useNavigation()
  const handlePress = (item) => {
    navigation.navigate(NAMES.DETAIL_TRANS_BOOK, {
      transBook: item
    })
  }

  const listData = useMemo(() => _mockDetailReport.transactionBooks.map(item => ({
    ...item,
    handlePress: () => handlePress(item)
  })))

  return (
    <Layout
      level="1"
      style={{
        height: "100%"
      }}
    >
      <TotalAmount
        total={_mockDetailReport.total}
      />
      <List
        data={listData}
        ItemSeparatorComponent={Divider}
        renderItem={TransBookItem}
      />
    </Layout>
  )
}

export default {
  name: NAMES.TRANSACTION_BOOK,
  component: TransactionBooks,
  options: {
    headerStyle: {
      backgroundColor: themes["color-primary-500"],
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0
    },
    headerTintColor: '#fff',
    headerRight: ButtonCreateBook
  }
}