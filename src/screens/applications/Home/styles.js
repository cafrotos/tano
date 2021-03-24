import { BASE_SIZE } from "configs/styles";
import themes from "configs/themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainWrapper: {
    backgroundColor: themes["color-primary-500"]
  },
  touchableReportWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: BASE_SIZE * 3
  },
  quickReportWrapper: {
    padding: BASE_SIZE * 4,
    backgroundColor: "#ffffff",
    borderRadius: BASE_SIZE * 3
  },
  reportWraper: {
    flex: 1
  },
  displayName: {
    fontWeight: "bold"
  },
  logoutButton: {
    height: 30,
    width: 30,
    borderRadius: 30
  },
  icon: {
    height: BASE_SIZE * 6,
    width: BASE_SIZE * 6
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titlePositive: {
    color: themes["color-success-500"]
  },
  titleNegative: {
    color: themes["color-danger-500"]
  }
})