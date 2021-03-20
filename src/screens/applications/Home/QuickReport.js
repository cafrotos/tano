import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import { BASE_SIZE } from "configs/styles";
import React from "react";
import { TouchableHighlight, View } from "react-native";
import styles from "./styles";

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
          <Icon
            name="bar-chart-outline"
            fill="#606060"
            style={commonStyles.icon}
          />
          <Text
            style={styles.title}
          >
            {
              /**
               * @fixme thay thế giá trị dưới bằng value thực tế
               */
            }
            {"100.100"}
          </Text>
        </Space>
        <Icon
          name="arrowhead-right-outline"
          fill="#606060"
          style={styles.icon}
        />
      </View>
    </TouchableHighlight>
  )
}