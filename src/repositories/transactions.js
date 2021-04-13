import { TRANS_TYPE } from "configs";
import firestore from "services/firebase/firestore";
import { docsDataToArray } from "utils";
import transBooksCollection from "./transBooks";
import transGroupsCollection from "./transGroups";

const transactionCollection = firestore.collection("transactions");

export default transactionCollection

/**
 * 
 * @param {import("repositories").cbQuery} cbQuery 
 */
export const getTransactions = async (cbQuery) => {
  try {
    const data = await (
      typeof cbQuery === "function" ?
        cbQuery(transactionCollection) :
        transactionCollection.get()
    )

    const transaction = docsDataToArray(data)
    return await Promise.all(transaction.map(async transaction => {
      const _transGroup = await transGroupsCollection.doc(transaction.transGroup).get();
      return {
        ...transaction,
        transGroup: _transGroup.data()
      }
    }))
  } catch (error) {
    console.log(error)
  }
}

export const createTransaction = async (data) => {
  const transBook = await transBooksCollection
    .doc(data.transBook)
    .get()
  const [transaction] = await Promise.all([
    transactionCollection.add({
      ...data,
      amount: Number(data.amount),
      date: data.date || new Date()
    }),
    transBooksCollection
      .doc(data.transBook)
      .update({
        amount: Number(transBook.data().amount || 0) + (
          data.type === TRANS_TYPE.OUTPUT ? - Number(data.amount) : Number(data.amount)
        )
      })
  ])
  return transaction
}