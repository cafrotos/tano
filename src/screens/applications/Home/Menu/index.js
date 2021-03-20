import { commonStyles } from "assets/styles";
import React from "react";
import { View } from "react-native";
import Item from "./Item";

export default () => {
  return (
    <View
      style={[
        commonStyles.flexHorizontalEvenly,
        
      ]}
    >
      <Item icon="clipboard-outline" label={"Sổ  hàng"} />
      <Item icon="clipboard-outline" label={"Sổ  hàng"} />
      <Item icon="clipboard-outline" label={"Sổ  hàng"} />
      <Item icon="clipboard-outline" label={"Sổ  hàng"} />
    </View>
  )
}