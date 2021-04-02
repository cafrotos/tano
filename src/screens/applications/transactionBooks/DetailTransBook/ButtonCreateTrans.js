import { useNavigation } from "@react-navigation/core";
import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import React from "react";
import { TouchableNativeFeedback } from "react-native";

export default () => {
  const navigation = useNavigation();

  const handlePressCreateTrans = () => navigation.navigate(NAMES.CREATE_TRANSACTION)

  return (
    <TouchableNativeFeedback
      onPress={handlePressCreateTrans}
    >
      <Space
        style={[
          commonStyles.flexHorizontalMiddle,
          {
            marginRight: 8
          }
        ]}
        size={0.5}
      >
        <Icon
          name="plus"
          style={commonStyles.icon}
          fill="#ffffff"
        />
        <Text style={[commonStyles.textColorWhite]}>
          {"Tạo GD"}
        </Text>
      </Space>
    </TouchableNativeFeedback>
  )
}