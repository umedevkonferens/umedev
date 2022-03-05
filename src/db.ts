import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Get a Firestore instance
export const db = firebase
  .initializeApp({ databaseURL: 'https://umedev-web.firebaseio.com/' })
  .database();
