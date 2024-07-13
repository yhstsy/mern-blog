// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-d41c3.firebaseapp.com",
    projectId: "mern-blog-d41c3",
    storageBucket: "mern-blog-d41c3.appspot.com",
    messagingSenderId: "20243221859",
    appId: "1:20243221859:web:78e330f81665c2ba615756"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);