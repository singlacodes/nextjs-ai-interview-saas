
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-acac5.firebaseapp.com",
  projectId: "ai-interview-acac5",
  storageBucket: "ai-interview-acac5.firebasestorage.app",
  messagingSenderId: "733998104953",
  appId: "1:733998104953:web:a5606bd0d75e6d86222fa8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}