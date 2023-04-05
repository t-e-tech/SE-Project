// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFpqVJY5GTYLP0nX9mkj0S8iOF6fXPlHg",
  authDomain: "massage-3f820.firebaseapp.com",
  projectId: "massage-3f820",
  storageBucket: "massage-3f820.appspot.com",
  messagingSenderId: "1031582952087",
  appId: "1:1031582952087:web:b1c98b0deabcc6abd7d7d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()