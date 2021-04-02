import { Divider, Layout, List, Text } from "@ui-kitten/components";
import React, { useMemo } from "react";
import TotalAmount from "components/TotalAmount";

import { _mockDetailTransBook } from "configs/mockups"
import TransItem from "components/TransItem";
import { useNavigation } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import ButtonCreateTrans from "./ButtonCreateTrans";
import Space from "components/Space";
import { commonStyles } from "assets/styles";

const DetailTransBook = () => {
  const navigation = useNavigation()
  const handlePress = (item) => {
    // navigation.navigate(NAMES.CREATE_TRANSACTION)
  }

  const listData = useMemo(() => _mockDetailTransBook.transactions.map(item => ({
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
        total={_mockDetailTransBook.total}
      />
      <List
        data={listData}
        ItemSeparatorComponent={Divider}
        renderItem={TransItem}
      />
    </Layout>
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
          {route.params.transBook.title}
        </Text>
      </Space>
    )
  })
}