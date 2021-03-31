import { BASE_SIZE } from "configs/styles";
import themes from "configs/themes";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: BASE_SIZE * 5,
    paddingVertical: BASE_SIZE * 10,
    justifyContent: "space-between",
    width: "100%",
  },
  flexHorizontalCenter: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  flexHorizontalEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  flexHorizontalBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  flexHorizontalMiddle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  flexHorizontalCenter: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  flexVerticalEvenly: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  flexVerticalBetween: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexVerticalMiddle: {
    flexDirection: "column",
    alignItems: "center",
  },
  flexVerticalCenter: {
    flexDirection: "column",
    justifyContent: "center",
  },
  flexVerticalEvenly: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  flexVerticalBetween: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexVerticalMiddle: {
    flexDirection: "column",
    alignItems: "center",
  },
  textColorWhite: {
    color: "#ffffff"
  },
  textColorDanger: {
    color: themes["color-danger-400"]
  },
  icon: {
    height: BASE_SIZE * 6,
    width: BASE_SIZE * 6
  },
})