
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyASHr8sSbAeIC2hftRMInWGt_77uACO9nE",
  authDomain: "chatapp-b9440.firebaseapp.com",
  projectId: "chatapp-b9440",
  storageBucket: "chatapp-b9440.appspot.com",
  messagingSenderId: "253813801254",
  appId: "1:253813801254:web:5e7c6ca75f4faec5cb01e7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()