
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAoy3-6wFoEvuYJVB5v0AkfkY90aeMl1TA",
  authDomain: "chat-box-8c4ef.firebaseapp.com",
  projectId: "chat-box-8c4ef",
  storageBucket: "chat-box-8c4ef.appspot.com",
  messagingSenderId: "876411741698",
  appId: "1:876411741698:web:03f343506388c15f15e91b",
  measurementId: "G-7VSG43XLNT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();