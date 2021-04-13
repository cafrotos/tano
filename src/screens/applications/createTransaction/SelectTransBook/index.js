import { Divider, Layout, List } from "@ui-kitten/components";
import React, { useCallback } from "react";

import { _mockDetailReport } from "configs/mockups"
import TransBookItem from "components/TransBookItem";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import { getTransBooks } from "repositories/transBooks";
import useLoadState from "services/hooks/useLoadState";
import _ from "lodash";
import { RefreshControl } from "react-native";

const SelectTransBook = () => {
  const navigation = useNavigation()
  const [transBooks, , loadTransBooks] = useLoadState({
    onGetState: getTransBooks,
    mapping: (dataSource) => dataSource.map(item => ({
      ...item,
      handlePress: () => {
        navigation.navigate(NAMES.CREATE_TRANSACTION, {
          transBook: item
        })
      }
    }))
  })

  useFocusEffect(
    useCallback(() => {
      loadTransBooks()
    }, [])
  );

  return (
    <Layout
      level="1"
      style={{
        height: "100%"
      }}
    >
      <List
        refreshControl={
          <RefreshControl
            refreshing={transBooks.loading}
            onRefresh={loadTransBooks}
          />
        }
        data={transBooks.dataSource}
        ItemSeparatorComponent={Divider}
        renderItem={TransBookItem}
      />
    </Layout>
  )
}

export default {
  name: NAMES.SELECT_TRANS_BOOK,
  component: SelectTransBook,
}