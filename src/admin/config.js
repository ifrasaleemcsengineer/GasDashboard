import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuKRVOUBvDku_EmZXRWtxr2BBX3ew7T-4",
  authDomain: "gascylinderapp.firebaseapp.com",
  databaseURL: "https://gascylinderapp-default-rtdb.firebaseio.com",
  projectId: "gascylinderapp",
  storageBucket: "gascylinderapp.appspot.com",
  messagingSenderId: "675120138369",
  appId: "1:675120138369:web:b251ac4fb0613fe5c9a580",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
