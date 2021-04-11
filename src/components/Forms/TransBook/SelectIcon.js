import { useRoute } from "@react-navigation/core";
import { Button, Icon } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import React from "react";
import { View } from "react-native";

export default ({
  onSelectIcon
}) => {
  const { params } = useRoute();

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
        accessoryLeft={renderIcon(params?.icon || { name: "question-mark" })}
        onPress={onSelectIcon}
        size="large"
        appearance="outline"
        style={{
          borderRadius: 40,
          height: 40,
          width: 40,
        }}
      />
    </View>
  )
}