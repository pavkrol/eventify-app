import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAwrhFp7tkdALq9C0-tDW1lUFBQPGo7LZM",
  authDomain: "eventify-app-2cd1a.firebaseapp.com",
  databaseURL: "https://eventify-app-2cd1a.firebaseio.com",
  projectId: "eventify-app-2cd1a",
  storageBucket: "eventify-app-2cd1a.appspot.com",
  messagingSenderId: "89680173048",
  appId: "1:89680173048:web:75fd4f4363d45ac33ae80d",
  measurementId: "G-LJDHN3XRJK"
};

firebase.initializeApp(config);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userDatabaseRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userDatabaseRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const date = new Date();
    const createdAt = date.getFullYear();
    try {
      await userDatabaseRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();
    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
