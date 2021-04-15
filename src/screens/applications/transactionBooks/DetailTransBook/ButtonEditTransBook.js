import { useNavigation, useRoute } from "@react-navigation/core";
import { Button, Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import { renderIcon } from "components";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import React from "react";
import { TouchableNativeFeedback } from "react-native";

export default () => {
  const navigation = useNavigation();
  const { params } = useRoute()

  const handlePressCreateTrans = () => navigation.navigate(NAMES.EDIT_TRANS_BOOK, params)

  return (
    <Button
      status="control"
      appearance="ghost"
      accessoryLeft={renderIcon({ name: "settings", })}
      onPress={handlePressCreateTrans}
      size="large"
      style={{
        height: 32,
        width: 32,
        borderRadius: 32
      }}
    />
  )
}