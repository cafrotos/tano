import { useNavigation } from "@react-navigation/core";
import { Input } from "@ui-kitten/components";
import React from "react";
import { Platform, View } from "react-native";


export default () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginLeft: Platform.OS === "android" ? -20 : 24
      }}
    >
      <Input
        autoFocus
        onChangeText={(text) => navigation.setParams({ search: text })}
        style={{
          width: "100%",
          borderWidth: 0,
          backgroundColor: "transparent",
          borderColor: "white"
        }}
      />
    </View>
  )
}