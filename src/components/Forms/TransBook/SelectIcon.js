import { useRoute } from "@react-navigation/core";
import { Button, Icon } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import React from "react";
import { View } from "react-native";

export default ({
  onSelectIcon,
  value,
  defaultValue
}) => {
  return (
    <View
      style={[
        commonStyles.flexHorizontalCenter,
        commonStyles.flexHorizontalMiddle,
        {
          height: 40,
          margin: 4
        }
      ]}
    >
      <Button
        accessoryLeft={renderIcon(value || defaultValue)}
        onPress={onSelectIcon}
        appearance="outline"
        status="basic"
        style={{
          borderRadius: 50,
          height: 50,
          width: 50,
          padding: 0
        }}
      />
    </View>
  )
}