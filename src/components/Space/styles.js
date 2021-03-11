import { BASE_SIZE } from "configs/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    width: "100%",
  },
  vertical: {
    flexDirection: "column",
    backgroundColor: "transparent",
    width: "100%",
  },
  horizontalSpaceItem: {
    marginLeft: BASE_SIZE * 4
  },
  verticalSpaceItem: {
    marginBottom: BASE_SIZE * 4,
  },
})