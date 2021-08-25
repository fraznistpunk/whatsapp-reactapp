import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKZrPm7YnIyLcsEaUp8WoRZZgXl95_t5s",
  authDomain: "fraz-whatsapp.firebaseapp.com",
  projectId: "fraz-whatsapp",
  storageBucket: "fraz-whatsapp.appspot.com",
  messagingSenderId: "250962047269",
  appId: "1:250962047269:web:fd55dd67d8137d9857eacc",
  measurementId: "G-NMBV37JZF6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;