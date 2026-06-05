import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mFxUagTr0Zeg4LuLcwJ13PimlLocLQM",
  authDomain: "metanox-1373c.firebaseapp.com",
  projectId: "metanox-1373c",
  storageBucket: "metanox-1373c.firebasestorage.app",
  messagingSenderId: "518852651878",
  appId: "1:518852651878:web:07de2aa9346f99de5c76a7",
  measurementId: "G-PPF71B1GPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
