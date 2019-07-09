import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGAnpY8F6bN76xAw1Crz0BwJg7d4l7fWQ",
  authDomain: "crwn-db-cb.firebaseapp.com",
  databaseURL: "https://crwn-db-cb.firebaseio.com",
  projectId: "crwn-db-cb",
  storageBucket: "",
  messagingSenderId: "410062734144",
  appId: "1:410062734144:web:4a2b31d1bc8bf8d6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
