import { BASE_SIZE } from "configs/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  iconWrapper: {
    padding: BASE_SIZE * 3,
    backgroundColor: "#ffffff",
    borderRadius: BASE_SIZE * 3
  },
  itemWrapper: {
    width: BASE_SIZE * 19,
  },
  itemButton: {
    borderRadius: 16,
    height: BASE_SIZE * 15,
    width: BASE_SIZE * 15
  }
})