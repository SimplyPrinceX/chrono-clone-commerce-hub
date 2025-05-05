
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your own Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyDXeBdysM9atNueWhlpn2DxnBCTVAFu_t8",
  authDomain: "chronova-6d7aa.firebaseapp.com",
  projectId: "chronova-6d7aa",
  storageBucket: "chronova-6d7aa.firebasestorage.app",
  messagingSenderId: "788325293912",
  appId: "1:788325293912:web:5f51a4a1cd816a49e2cf2d",
  measurementId: "G-KHTK27NNRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
