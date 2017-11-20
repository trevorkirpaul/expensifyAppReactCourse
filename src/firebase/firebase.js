import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCe4xKzds_yU9Cq-TVQul1MwjUde4MLLqk",
  authDomain: "expensify-61c1a.firebaseapp.com",
  databaseURL: "https://expensify-61c1a.firebaseio.com",
  projectId: "expensify-61c1a",
  storageBucket: "expensify-61c1a.appspot.com",
  messagingSenderId: "853341421427"
};

firebase.initializeApp(config);


const database = firebase.database();

//child_removed

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_added

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnap) => {
//     expenses.push({
//       id: childSnap.key,
//       ...childSnap.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: "External HD",
//   note: "For home lab",
//   amount: 500,
//   createdAt: "Jan 1, 2018"
// });

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: "SSD",
//     note: "more storage space",
//     amount: 500,
//     createdAt: "Jan 1, 2018"
//   });
// }, 3000)

// database.ref('expenses').push({
//   description: "MacBook Pro",
//   note: "For new react developer job",
//   amount: 3500,
//   createdAt: "Jan 12, 2018"
// });

