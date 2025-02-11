// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO85UF09blqCwza8X_AIL-2pe0pd0aYvc",
  authDomain: "portfolio-dashboard-23505.firebaseapp.com",
  projectId: "portfolio-dashboard-23505",
  storageBucket: "portfolio-dashboard-23505.firebasestorage.app",
  messagingSenderId: "1071200690005",
  appId: "1:1071200690005:web:1a116fead013ab1c5cd9dc",
  measurementId: "G-9JD1W40047",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireDB = getFirestore(app);
