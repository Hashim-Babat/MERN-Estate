// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestquest-69c2d.firebaseapp.com",
  projectId: "nestquest-69c2d",
  storageBucket: "nestquest-69c2d.appspot.com",
  messagingSenderId: "977180768223",
  appId: "1:977180768223:web:f18e6d7a9ca5bc7890b66a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);