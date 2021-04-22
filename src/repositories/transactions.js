import { COLLECTION_NAMES, TRANS_TYPE } from "configs";
import { docsDataToArray } from "utils";
import transBooksCollection, { getTransBooks } from "./transBooks";
import transGroupsCollection from "./transGroups";
import _ from "lodash";

/**
 * @param {string} transBookId
 * @param {import("repositories").cbQuery} cbQuery 
 */
export const getTransactions = async (transBookId, cbQuery) => {
  const getTransactions = async () => {
    if (transBookId) {
      const docs = await (
        cbQuery === "function" ?
          cbQuery(transBooksCollection().doc(transBookId).collection(COLLECTION_NAMES.TRANSACTIONS)) :
          transBooksCollection().doc(transBookId).collection(COLLECTION_NAMES.TRANSACTIONS).get()
      )
      return docsDataToArray(docs)
    }
    const transBooks = await getTransBooks();
    const groupTransaction = await Promise.all(transBooks.map(async ({ id }) => {
      const docs = await cbQuery(transBooksCollection().doc(id).collection(COLLECTION_NAMES.TRANSACTIONS))
      return docsDataToArray(docs)
    }))
    return _.flatMap(groupTransaction)
  }
  try {
    const transaction = await getTransactions()

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
  const transBook = await transBooksCollection()
    .doc(data.transBook)
    .get()

  const dataUpdateTransBook = {
    amount: transBook.data().amount,
    amountIn: transBook.data().amountIn,
    amountOut: transBook.data().amountOut
  }
  if (data.type === TRANS_TYPE.OUTPUT.value) {
    Object.assign(dataUpdateTransBook, {
      amount: dataUpdateTransBook.amount - Number(data.amount),
      amountOut: dataUpdateTransBook.amount + Number(data.amount),
    })
    Object.assign(data, {
      amount: 0 - Number(data.amount)
    })
  }
  else {
    Object.assign(dataUpdateTransBook, {
      amount: dataUpdateTransBook.amount + Number(data.amount),
      amountOut: dataUpdateTransBook.amount + Number(data.amount),
    })
  }

  const [transaction] = await Promise.all([
    transBooksCollection()
      .doc(data.transBook)
      .collection(COLLECTION_NAMES.TRANSACTIONS)
      .add({
        ...data,
        amount: Number(data.amount),
        date: data.date || new Date()
      }),
    transBooksCollection()
      .doc(data.transBook)
      .update(dataUpdateTransBook)
  ])
  return transaction
}