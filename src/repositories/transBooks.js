import firestore from "services/firebase/firestore";
import { docsDataToArray } from "utils";

const transBooksCollection = firestore.collection("transBooks");

export default transBooksCollection


/**
 * 
 * @callback cbQuery
 * @param {typeof transBooksCollection} transBooksCollection 
 * @returns {FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>}
 */

/**
 * 
 * @param {cbQuery} callback 
 */
export const getTransBooks = async (cbQuery) => {
  const data = await (
    typeof cbQuery === "function" ?
      cbQuery(transBooksCollection) :
      transBooksCollection.get()
  )
  return docsDataToArray(data)
}