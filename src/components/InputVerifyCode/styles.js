import { BASE_SIZE } from 'configs/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rootStyle: {
    position: "relative",
    alignItems: "center",
  },
  cellRoot: {
    width: BASE_SIZE * 12,
    height: BASE_SIZE * 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginHorizontal: BASE_SIZE
  },
  cellText: {
    color: '#000',
    fontSize: BASE_SIZE * 10,
    textAlign: 'center',
    width: "100%"
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 3,
  },
  danger: {
    color: "red"
  }
});