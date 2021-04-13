import { useRoute } from "@react-navigation/core";
import { Icon, Layout, ListItem, Text, useTheme } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import React, { useEffect } from "react";
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
  const { params } = useRoute()

  return (
    <Space
      direction="vertical"
      size={1}
    >
      <ListItem
        onPress={onPress}
        title={params?.transGroup?.title || "Chọn nhóm giao dịch"}
        accessoryLeft={renderIcon({ name: "question-mark-circle", ...params?.transGroup?.icon })}
        style={{
          borderWidth: 1,
          borderRadius: 4,
          borderColor: status === "danger" ?
            themes["color-danger-400"] :
            themes["color-basic-400"],
          backgroundColor: themes["color-basic-200"]
        }}
      />
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