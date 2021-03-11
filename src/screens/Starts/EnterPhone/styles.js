import { BASE_SIZE } from "configs/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: BASE_SIZE * 5,
    paddingVertical: BASE_SIZE * 10,
    justifyContent: "space-between"
  },
  hint: {
    fontWeight: "700",
    fontSize: BASE_SIZE * 4,
    textTransform: "uppercase"
  }, 
  input: {
    width: "100%"
  }
})
