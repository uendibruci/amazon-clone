import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe8Fu2UtM3bZjb-AsfXoLTtO392UmG5NI",
  authDomain: "clone-bf84b.firebaseapp.com",
  projectId: "clone-bf84b",
  storageBucket: "clone-bf84b.appspot.com",
  messagingSenderId: "55291200273",
  appId: "1:55291200273:web:6acd1b936b639ab70802b0",
  measurementId: "G-KJLR6MBKLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
