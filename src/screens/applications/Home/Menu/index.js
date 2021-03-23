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
      <Item icon="clipboard" label={"Sổ  hàng"} />
      <Item icon="book" label={"Công nợ"} />
      <Item icon="list" label={"Lịch sử"} />
      <Item icon="plus" label={"Tiền hàng"} />
    </View>
  )
}