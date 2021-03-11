import { BASE_SIZE } from "configs/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: BASE_SIZE * 5
  },
  sloganWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: BASE_SIZE * 16,
    fontFamily: "RobotoSlab-Medium",
    color: "#ffffff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3
  },
  slogan: {
    marginLeft: BASE_SIZE * 3,
    fontWeight: "600",
    color: "#ffffff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  actionWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hint: {
    color: "#ffffff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "600"
  }
})
