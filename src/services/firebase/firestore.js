import firestore from '@react-native-firebase/firestore';

const instance = firestore()

export default instance;

export const transBooksCollection = instance.collection("transBooks")
export const transGroupsCollection = instance.collection("transGroups")
export const transactions = instance.collection("transactions")
