import auth from "@react-native-firebase/auth"

const instance = auth()

export default instance

export const signInWithPhone = (phone) => instance.signInWithPhoneNumber(
  phone.replace(/^(0|84)/g, "+84")
)

export const signOut = instance.signOut

export const onAuthStateChanged = (handle) => instance.onAuthStateChanged(
  typeof handle === "function" ?
    handle :
    () => { }
)