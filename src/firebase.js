import firebase from "./firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRScOD2ShDoIhtrLyMqwugIVUUYPPjyKI",
  authDomain: "whats-app-clone-9f7aa.firebaseapp.com",
  databaseURL: "https://whats-app-clone-9f7aa-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-9f7aa",
  storageBucket: "whats-app-clone-9f7aa.appspot.com",
  messagingSenderId: "129543873407",
  appId: "1:129543873407:web:ff434856777cb4cf2e704a",
  measurementId: "G-JNGMZTL91S",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
