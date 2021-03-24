import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import { BASE_SIZE } from "configs/styles";
import React from "react";
import { TouchableHighlight, View } from "react-native";
import { getFormatNumber } from "utils";
import styles from "./styles";

const _mockTotalCash = 100000

export default () => {
  return (
    <TouchableHighlight
      style={styles.touchableReportWrapper}
      onPress={() => { }}
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
          <Text
            style={[
              styles.title,
              styles[_mockTotalCash > 0 ? "titlePositive" : "titleNegative"]
            ]}
          >
            {
              /**
               * @fixme thay thế giá trị dưới bằng value thực tế
               */
            }
            {getFormatNumber("vi-VN", _mockTotalCash)}
          </Text>
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