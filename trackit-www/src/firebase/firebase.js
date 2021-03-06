import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref("time-tracker");

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, databaseRef as default };

// const expensesRef = databaseRef.child("expenses");

// // subscription on firebse data
// expensesRef.on("child_removed", snapshot => {
//   console.log(snapshot.key);
// });
// expensesRef.on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// expensesRef.on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //subscribe for data changes
// expensesRef.on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(expense => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     });
//   });
//   console.log(expenses);
// });

// //fetch data once
// expensesRef.once("value").then(snapshot => {
//   const expenses = [];
//   snapshot.forEach(expense => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     });
//   });
//   console.log(expenses);
// });

// //add entries
// expensesRef.push({
//   description: "Electricity Bill",
//   amount: "5000",
//   note: "bill for jan",
//   createdAt: Date.now()
// });

// //full update
// expensesRef.child("-KxbfXdYd5hoqb1lQJxj").set({
//   description: "Electricity Bill Chg"
// });

// //partial update
// expensesRef.child("-KxbfXddhlkifaoa3g8j").update({
//   note: "for Oct"
// });

// //remove data
// expensesRef
//   .child("-KxbfXddhlkifaoa3g8j")
//   .remove()
//   .then(() => {
//     console.log("removed");
//   });
