import firestore from "services/firebase/firestore";

const transBooksCollection = firestore.collection("transBooks");

export default transBooksCollection