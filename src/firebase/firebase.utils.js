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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
