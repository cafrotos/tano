import { commonStyles } from "assets/styles";
import themes from "configs/themes";
import { StyleSheet } from "react-native";

export const numpad = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  cell: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderColor: "#c0c0c0",
    ...commonStyles.flexHorizontalCenter,
    ...commonStyles.flexHorizontalMiddle
  },
  rowLatest: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    borderWidth: 0
  },
  col3: {
    flex: 3,
    height: "100%"
  },
  cellForCol3: {
    height: "50%",
    flexDirection: "row",
    borderWidth: 0
  },
  submit: {
    backgroundColor: themes["color-primary-500"]
  },
  bold: {
    fontWeight: "500",
    fontSize: 16
  },
  actionText: {
    fontWeight: "bold"
  }
})