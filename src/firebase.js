import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyClmT4dU-aETpV8TGMvsLJoRB8yKxofsHw",
  authDomain: "react-authentication1.firebaseapp.com",
  projectId: "react-authentication1",
  storageBucket: "react-authentication1.appspot.com",
  messagingSenderId: "647405950031",
  appId: "1:647405950031:web:b62f6cfa27c567b25f463a",
  measurementId: "G-PCXXH7JKZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;