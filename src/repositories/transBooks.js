import { COLLECTION_NAMES } from "configs";
import { collections } from "services/firebase/firestore";
import { docsDataToArray } from "utils";

const transBooksCollection = () => collections.getCollection(COLLECTION_NAMES.TRANSBOOKS);

export default transBooksCollection

/**
 * 
 * @param {import("repositories").cbQuery} callback 
 */
export const getTransBooks = async (cbQuery) => {
  const data = await (
    typeof cbQuery === "function" ?
      cbQuery(transBooksCollection()) :
      transBooksCollection().get()
  )
  return docsDataToArray(data)
}

export const getTransBookByDoc = async (doc) => {
  const transBook = await transBooksCollection().doc(doc).get();
  return {
    id: transBook.id,
    ...transBook.data()
  }
}
