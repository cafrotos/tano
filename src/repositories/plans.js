import { COLLECTION_NAMES } from "configs";
import { collections } from "services/firebase/firestore";
import { docsDataToArray } from "utils";

const plansCollection = () => collections.getCollection(COLLECTION_NAMES.PLANS);

export default plansCollection

/**
 * 
 * @param {import("repositories").cbQuery} callback 
 */
export const getPlans = async (cbQuery) => {
  const data = await (
    typeof cbQuery === "function" ?
      cbQuery(plansCollection()) :
      plansCollection().get()
  )
  return docsDataToArray(data)
}

export const getPlanByDoc = async (doc) => {
  const plan = await plansCollection().doc(doc).get();
  return {
    id: plan.id,
    ...plan.data()
  }
}
