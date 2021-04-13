import { Icon, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import React from "react";
import { View } from "react-native";
import { getFormatNumber } from "utils";

export default ({
  total
}) => {
  const themes = useTheme();

  return (
    <View
      style={[
        commonStyles.flexHorizontalMiddle,
        commonStyles.flexHorizontalCenter,
        {
          height: 100,
          backgroundColor: themes["color-primary-500"],
          paddingBottom: 20
        }
      ]}
    >
      <Space
        size={2}
        style={[
          commonStyles.flexHorizontalMiddle,
          commonStyles.flexHorizontalCenter,
        ]}
      >
        <Icon
          name="activity"
          style={[
            commonStyles.icon
          ]}
          fill="#ffffff"
        />
        <Text
          style={[
            commonStyles.textColorWhite,
            {
              fontSize: 40,
              fontWeight: "400"
            }
          ]}
        >
          {getFormatNumber("vi-VN", total || 0)}
        </Text>
      </Space>
    </View>
  )
}