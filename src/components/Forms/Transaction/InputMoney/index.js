import { Layout, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import React from "react";
import { TouchableHighlight } from "react-native";
import { getFormatNumber } from "utils";

const InputMoney = ({
  value,
  onPress,
  status,
  caption
}) => {
  const themes = useTheme()
  return (
    <Space
      direction="vertical"
      size={1}
    >
      <TouchableHighlight
        onPress={onPress}
        style={{
          borderRadius: 4
        }}
      >
        <Layout
          level="2"
          style={[
            commonStyles.flexHorizontalMiddle,
            commonStyles.flexHorizontalCenter,
            {
              padding: 4 * 5,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: status === "danger" ?
                themes["color-danger-400"] :
                themes["color-basic-400"]
            }
          ]}
        >
          <Text
            style={{
              fontSize: 4 * 8,
              textAlign: "center"
            }}
          >
            {getFormatNumber("vi-VN", value || 0)}
          </Text>
        </Layout>
      </TouchableHighlight>
      {
        caption && (
          <Text
            category="c1"
            style={[
              status === "danger" && commonStyles.textColorDanger
            ]}
          >
            {caption}
          </Text>
        )
      }
    </Space>
  )
}

InputMoney.displayName = "Input"

export default InputMoney