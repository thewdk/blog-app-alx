// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-alx.firebaseapp.com",
  projectId: "blog-app-alx",
  storageBucket: "blog-app-alx.appspot.com",
  messagingSenderId: "536070147699",
  appId: "1:536070147699:web:cb2ffa742e09bf7673a406"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);