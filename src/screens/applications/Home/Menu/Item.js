import { Button, Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import React from "react";
import { View } from "react-native";

export default ({
  icon,
  label
}) => {
  return (
    <View
      style={[
        commonStyles.flexVerticalCenter,
        commonStyles.flexVerticalMiddle
      ]}
    >
      <Space
        direction="vertical"
        size={1}
      >
        <Button
          size="large"
          status="control"
          accessoryLeft={renderIcon({ name: icon, fill: "#606060" })}
          style={{
            borderRadius: 16,
            height: 4 * 15,
            width: 4 * 15
          }}
        />
        <Text>
          {label}
        </Text>
      </Space>
    </View>
  )
}