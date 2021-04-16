import { useNavigation } from "@react-navigation/core";
import { commonStyles } from "assets/styles";
import { NAMES } from "configs/screens";
import React from "react";
import { View } from "react-native";
import Item from "./Item";

export default () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        commonStyles.flexHorizontalEvenly,
      ]}
    >
      <Item icon="pie-chart-2" label={"Báo cáo"} onPress={() => navigation.navigate(NAMES.REPORTS)} />
      <Item icon="layers" label={"Kế hoạch"} />
      <Item icon="award" label={"Thành tích"} />
      <Item icon="plus" label={"Giao dịch"} onPress={() => navigation.navigate(NAMES.CREATE_TRANSACTION)} />
    </View>
  )
}