import { useNavigation } from "@react-navigation/core";
import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Amount from "components/Amount";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import React from "react";
import { TouchableHighlight, View } from "react-native";
import styles from "./styles";

const _mockTotalCash = 100000

export default () => {
  const navigation = useNavigation()

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
            amount={_mockTotalCash}
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