import { useNavigation } from "@react-navigation/core";
import { Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import React from "react";
import { View } from "react-native";
import { formatNumber } from "utils";

export default ({
  total,
  showReportButton
}) => {
  const themes = useTheme();
  const navigation = useNavigation()

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
          {formatNumber(total || 0)}
        </Text>
      </Space>
      {
        showReportButton ? (
          <Button
            appearance="outline"
            status="control"
            accessoryLeft={renderIcon({ name: "pie-chart-2" })}
            size="small"
            style={{
              borderRadius: 40
            }}
            onPress={() => navigation.navigate(NAMES.REPORTS)}
          >
            {"Báo cáo"}
          </Button>
        ) : null
      }
    </View>
  )
}