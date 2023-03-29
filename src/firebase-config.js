
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ancient-4c4b1.firebaseapp.com",
  projectId: "ancient-4c4b1",
  storageBucket: "ancient-4c4b1.appspot.com",
  messagingSenderId: "640058682321",
  appId: "1:640058682321:web:f92b29aab078da42c80ef0",
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
 