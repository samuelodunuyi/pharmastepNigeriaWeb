import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJRN7u0yVk5c_gtPkyM6VAM1-hl3nwsAM",
  authDomain: "shopper-56289.firebaseapp.com",
  projectId: "shopper-56289",
  storageBucket: "shopper-56289.appspot.com",
  messagingSenderId: "349672331122",
  appId: "1:349672331122:web:216d35d3a7d02ecd37efeb",
  measurementId: "G-QE1S6RQ0DX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage } ;