import { BASE_SIZE } from "configs/styles";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: BASE_SIZE * 5,
    paddingVertical: BASE_SIZE * 10,
    justifyContent: "space-between"
  }
})