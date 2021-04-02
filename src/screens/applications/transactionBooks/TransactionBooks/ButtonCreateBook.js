import { useNavigation } from "@react-navigation/core";
import { Icon, Text } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import Space from "components/Space";
import { NAMES } from "configs/screens";
import React from "react";
import { TouchableNativeFeedback } from "react-native";

export default () => {
  const navigation = useNavigation();

  const handlePressCreateBook = () => navigation.navigate(NAMES.CREATE_TRANS_BOOK)

  return (
    <TouchableNativeFeedback
      onPress={handlePressCreateBook}
    >
      <Space
        style={[
          commonStyles.flexHorizontalMiddle,
          {
            marginRight: 8,
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
          {"Tạo sổ"}
        </Text>
      </Space>
    </TouchableNativeFeedback>
  )
}