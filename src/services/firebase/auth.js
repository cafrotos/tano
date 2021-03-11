import auth from "@react-native-firebase/auth"

export const signInWithPhone = (phone) => auth().signInWithPhoneNumber(
  phone.replace(/^(0|84)/g, "+84")
)

export const signOut = auth().signOut

export const onAuthStateChanged = (handle) => auth().onAuthStateChanged(
  typeof handle === "function" ?
    handle :
    () => { }
)