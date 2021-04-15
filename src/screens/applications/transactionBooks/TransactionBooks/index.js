import { Button, Divider, Layout, List } from "@ui-kitten/components";
import React, { useCallback } from "react";
import TotalAmount from "components/TotalAmount";

import { _mockDetailReport } from "configs/mockups"
import TransBookItem from "components/TransBookItem";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import { getTransBooks } from "repositories/transBooks";
import useLoadState from "services/hooks/useLoadState";
import _ from "lodash";
import { RefreshControl, View } from "react-native";
import { commonStyles } from "assets/styles";

const TransactionBooks = () => {
  const navigation = useNavigation()
  const [transBooks, , loadTransBooks] = useLoadState({
    onGetState: getTransBooks,
    mapping: (dataSource) => ({
      total: _.sumBy(dataSource, (value) => Number(value.amount || 0)),
      transBooks: dataSource.map(item => ({
        ...item,
        handlePress: () => {
          navigation.navigate(NAMES.DETAIL_TRANS_BOOK, {
            transBook: item
          })
        }
      }))
    })
  })

  useFocusEffect(
    useCallback(() => {
      loadTransBooks()
    }, [])
  );

  const handlePressCreateBook = () => navigation.navigate(NAMES.CREATE_TRANS_BOOK)

  return (
    <Layout
      level="1"
      style={{
        height: "100%"
      }}
    >
      <TotalAmount
        total={transBooks.dataSource?.total}
      />
      <List
        refreshControl={
          <RefreshControl
            refreshing={transBooks.loading}
            onRefresh={loadTransBooks}
          />
        }
        data={transBooks.dataSource?.transBooks}
        ItemSeparatorComponent={Divider}
        renderItem={TransBookItem}
      />
      <View
        style={[
          commonStyles.flexHorizontalCenter,
          {
            position: "absolute",
            bottom: 8
          }
        ]}
      >
        <Button
          onPress={handlePressCreateBook}
        >
          {"Tạo sổ giao dịch"}
        </Button>
      </View>
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
  }
}