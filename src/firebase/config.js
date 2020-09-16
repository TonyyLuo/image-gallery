import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9Jt7AZhcdPC3Oqd9YgjrcJOkZrz74QqM",
  authDomain: "image-gallery-ff833.firebaseapp.com",
  databaseURL: "https://image-gallery-ff833.firebaseio.com",
  projectId: "image-gallery-ff833",
  storageBucket: "image-gallery-ff833.appspot.com",
  messagingSenderId: "642462165623",
  appId: "1:642462165623:web:40cad4dd561b50a4caf472",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, projectAuth, timestamp };
