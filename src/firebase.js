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
export const signOut = () => auth.signOut();

export default firebase;
