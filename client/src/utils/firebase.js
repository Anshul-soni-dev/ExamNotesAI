
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-examnotes-e0135.firebaseapp.com",
  projectId: "ai-examnotes-e0135",
  storageBucket: "ai-examnotes-e0135.firebasestorage.app",
  messagingSenderId: "273440733805",
  appId: "1:273440733805:web:1e00bdb1c87991bfcb5d64",
  measurementId: "G-20E9EQY0PP"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}