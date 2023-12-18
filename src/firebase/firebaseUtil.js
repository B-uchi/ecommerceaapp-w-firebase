import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7NJWE6QFAJC5sVBhOOSKp6UpXjS7iFeU",
  authDomain: "suburban-ecommerce-app.firebaseapp.com",
  projectId: "suburban-ecommerce-app",
  storageBucket: "suburban-ecommerce-app.appspot.com",
  messagingSenderId: "940959034346",
  appId: "1:940959034346:web:b44ecbc8979444aee96093",
  measurementId: "G-9PT892W78B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
