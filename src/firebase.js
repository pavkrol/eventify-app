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

export const getUserRef = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const getFavouriteArtists = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();
    return userDocument.data(favouriteArtists);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const getEventsCalendar = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();
    return userDocument.data(concerts);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const addFavourites = async (uid, artistId, artistName) => {
  if (!uid) return;

  const data = await getUserDocument(uid);
  const userDatabaseRef = firestore.doc(`users/${uid}`);
  let currentArtists = data.favouriteArtists;
  if (currentArtists && currentArtists.length) {
    if (currentArtists.find(artist => artist.id === artistId)) {
      currentArtists = currentArtists.filter(artist => artist.id !== artistId);
    } else {
      currentArtists = [{ id: artistId, name: artistName }, ...currentArtists];
    }
    try {
      await userDatabaseRef.update({
        favouriteArtists: currentArtists
      });
    } catch (error) {
      console.error("Error updating user", error);
    }
  } else {
    try {
      await userDatabaseRef.update({
        favouriteArtists: [{ id: artistId, name: artistName }]
      });
    } catch (error) {
      console.error("Error updating user", error);
    }
  }
};

export const addEventToCalendar = async (uid, event) => {
  if (!uid) return;

  const data = await getUserDocument(uid);
  const userDatabaseRef = firestore.doc(`users/${uid}`);

  let currentEvents = data.concerts;

  if (currentEvents && currentEvents.length) {
    if (!currentEvents.find(item => item.id === event.id)) {
      currentEvents = [{ ...event }, ...currentEvents];
    }
    try {
      await userDatabaseRef.update({
        concerts: currentEvents
      });
    } catch (error) {
      console.error("Error updating user", error);
    }
  } else {
    try {
      await userDatabaseRef.update({
        concerts: [{ ...event }]
      });
    } catch (error) {
      console.error("Error updating user", error);
    }
  }
};

export const removeEventFromCalendar = async (uid, eventId) => {
  if (!uid) return;

  const data = await getUserDocument(uid);
  const userDatabaseRef = firestore.doc(`users/${uid}`);

  let currentConcerts = data.concerts;
  currentConcerts = currentConcerts.filter(concert => concert.id !== eventId);
  try {
    await userDatabaseRef.update({
      concerts: currentConcerts
    });
  } catch (error) {
    console.error("Error updating user", error);
  }
};

export default firebase;
