import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbBzXfHqgUSmaalpvPAl68fTrSQul522c",
  authDomain: "brown-sandbox.firebaseapp.com",
  databaseURL: "https://brown-sandbox.firebaseio.com",
  projectId: "brown-sandbox",
  storageBucket: "brown-sandbox.appspot.com",
  messagingSenderId: "804911460550",
  appId: "1:804911460550:web:9d77073de5ef186813a7c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();
