import { Divider, Layout, List } from "@ui-kitten/components";
import React, { useCallback } from "react";
import TotalAmount from "components/TotalAmount";

import TransBookItem from "components/TransBookItem";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { NAMES } from "configs/screens";
import themes from "configs/themes";
import transBooksCollection, { getTransBooks } from "repositories/transBooks";
import useLoadState from "services/hooks/useLoadState";
import _ from "lodash";
import { ActionSheetIOS, RefreshControl, View } from "react-native";
import { buttonStyle, commonStyles } from "assets/styles";
import { TanoButtonSubmit } from "components/TanoButton";

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
        },
        handleLongPress: () => {
          ActionSheetIOS.showActionSheetWithOptions({
            options: ["Huỷ", "Xoá sổ GD", "Sửa sổ GD"],
            destructiveButtonIndex: 1,
            cancelButtonIndex: 0,
          },
            buttonIndex => {
              switch (buttonIndex) {
                case 1:
                  ActionSheetIOS.showActionSheetWithOptions({
                    options: ["Huỷ", "Xoá"],
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                    message: "Bạn có chắc chắn muốn xoá sổ giao dịch cùng tất cả các giao dịch trong sổ không?"
                  },
                    buttonIndex => {
                      if (buttonIndex === 1) {
                        return transBooksCollection
                          .doc(item.id)
                          .delete()
                          .then(() => loadTransBooks())
                      }
                    })
                  break;
                case 2:
                  navigation.navigate(NAMES.EDIT_TRANS_BOOK, { transBook: item })
                  break;
                default:
                  break;
              }
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
        showReportButton={true}
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
      <TanoButtonSubmit
        onPress={handlePressCreateBook}
        style={buttonStyle.shadowBorder}
      >
        {"Tạo sổ giao dịch"}
      </TanoButtonSubmit>
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