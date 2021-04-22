import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Amount from "components/Amount";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import _ from "lodash";
import React, { useCallback } from "react";
import { TouchableHighlight, View } from "react-native";
import { getTransBooks } from "repositories/transBooks";
import useLoadState from "services/hooks/useLoadState";
import styles from "./styles";

export default () => {
  const navigation = useNavigation()
  const [transBooks, , loadTransBooks] = useLoadState({
    onGetState: getTransBooks,
    mapping: (dataSource) => _.sumBy(dataSource, (value) => Number(value.amount || 0))
  })

  useFocusEffect(
    useCallback(() => {
      loadTransBooks()
    }, [])
  );

  return (
    <TouchableHighlight
      style={styles.touchableReportWrapper}
      onPress={() => navigation.navigate(NAMES.TRANSACTION_BOOK)}
    >
      <View
        style={[
          commonStyles.flexHorizontalBetween,
          commonStyles.flexHorizontalMiddle,
          styles.quickReportWrapper
        ]}
      >
        <Space
          direction="vertical"
          style={[
            styles.reportWraper
          ]}
        >
          <Space
            style={[
              commonStyles.flexHorizontalMiddle,
            ]}
          >
            <Icon
              name="bar-chart-outline"
              fill="#303030"
              style={commonStyles.icon}
            />
            <Text>
              {"Dư nợ"}
            </Text>
          </Space>
          <Amount
            amount={transBooks.dataSource}
            style={[
              styles.title
            ]}
          />
        </Space>
        <Icon
          name="arrowhead-right-outline"
          fill="#303030"
          style={styles.icon}
        />
      </View>
    </TouchableHighlight>
  )
}