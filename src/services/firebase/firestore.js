import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from "./auth"

const instance = firestore()

export default instance;

export const collections = (() => {
  const _collections = {
  }
  let _userDoc = null
  /**
   * 
   * @param {string} name 
   * @returns {FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>} 
   */
  const getCollection = (name) => {
    if (!_userDoc) {
      _userDoc = instance.collection("users").doc(auth.currentUser?.uid)
    }
    if (!_collections[name]) {
      _collections[name] = _userDoc.collection(name);
    }

    return _collections[name]
  }
  const cleanCollections = () => {
    Object.keys(_collections).forEach(key => delete _collections[key])
  }
  /**
   * 
   * @returns {FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>}
   */
  const getUserDoc = () => {
    if (!_userDoc) {
      _userDoc = instance.collection("users").doc(auth.currentUser?.uid)
    }
    return _userDoc
  }

  return {
    getCollection,
    cleanCollections,
    getUserDoc
  }
})()
