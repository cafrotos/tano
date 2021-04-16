import { Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
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
        commonStyles.flexVerticalMiddle,
        commonStyles.flexVerticalCenter,
        {
          backgroundColor: themes["color-primary-500"],
          paddingBottom: 12,
          paddingTop: 4
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
              fontWeight: "400",
              marginBottom: 12
            }
          ]}
        >
          {getFormatNumber("vi-VN", total || 0)}
        </Text>
      </Space>
      <Button
        appearance="outline"
        status="control"
        accessoryLeft={renderIcon({ name: "pie-chart-2" })}
        size="small"
        style={{
          borderRadius: 40
        }}
      >
        {"Báo cáo"}
      </Button>
    </View>
  )
}