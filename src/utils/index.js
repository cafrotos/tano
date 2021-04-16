import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { createContext } from "react";
import numeral from "numeral"

numeral.register('locale', 'vi-VN', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'KB'
  },
  ordinal: function () {
      return '.';
  },
  currency: {
      symbol: '₫'
  }
});

numeral.locale("vi-VN")

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

export const formatNumber = (number, format = "0,0[.]00 $") => numeral(number).format(format)

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