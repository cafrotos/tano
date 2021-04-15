import auth from "@react-native-firebase/auth"
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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

export const loginWithFacebook = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return instance.signInWithCredential(facebookCredential);
}
