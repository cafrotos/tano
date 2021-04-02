import { Icon, Layout, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import React from "react";
import { TouchableHighlight } from "react-native";
/**
 * @fixme move style to styles.js
 */
export default ({
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
          style={{
            padding: 4 * 2,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: status === "danger" ?
              themes["color-danger-400"] :
              themes["color-basic-400"]
          }}
        >
          <Space
            style={[
              commonStyles.flexHorizontalMiddle
            ]}
          >
            <Icon
              name="question-mark-circle"
              fill={themes["color-primary-500"]}
              style={{
                height: 32,
                width: 32
              }}
            />
            <Text>
              {"Chọn sổ giao dịch"}
            </Text>
          </Space>
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