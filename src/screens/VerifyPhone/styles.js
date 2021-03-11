import { BASE_SIZE } from 'configs/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: BASE_SIZE * 5,
    paddingVertical: BASE_SIZE * 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%"
  },
  formWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  iconWrapper: {
    height: BASE_SIZE * 12,
    width: BASE_SIZE * 12,
    borderRadius: BASE_SIZE * 12,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    height: BASE_SIZE * 6,
    width: BASE_SIZE * 6
  }, 
  titlePage: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: BASE_SIZE * 4,
    color: "black",
    textTransform: "uppercase"
  }
});