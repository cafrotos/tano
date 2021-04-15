import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { FORMAT_NUMBER_OPTIONS } from "configs";
import { createContext } from "react";

export const getContext = (() => {
  const contexts = {};

  return (name) => {
    if (contexts[name]) {
      return contexts[name]
    }
    contexts[name] = createContext();
    return contexts[name]
  }
})()

export const getFormatNumber = (() => {
  const locales = {};
  return (locale, number) => {
    if (!locales[locale]) {
      locales[locale] = new Intl.NumberFormat(locale)
    }
    return locales[locale].format(number) + " ₫"
  }
})()

/**
 * 
 * @param {FirebaseFirestoreTypes.DocumentSnapshot} doc
 */
export const getDocData = (doc) => ({
  id: doc.id,
  ...doc.data()
})

/**
 * 
 * @param {FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>} docs 
 */
export const docsDataToArray = (docs) => {
  const array = []
  docs.forEach(doc => {
    array.push(getDocData(doc))
  })
  return array
}