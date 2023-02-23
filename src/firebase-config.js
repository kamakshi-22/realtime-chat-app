// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh38v7uzjeO3hPXdUW4OkaJaVe2Xfn_vQ",
    authDomain: "react-chat-app-eec9a.firebaseapp.com",
    projectId: "react-chat-app-eec9a",
    storageBucket: "react-chat-app-eec9a.appspot.com",
    messagingSenderId: "138518608777",
    appId: "1:138518608777:web:9f5c924b7b05abb639ff58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // handle authentication with firebase auth service (anywhere in the app)
export const provider = new GoogleAuthProvider(); // handle authentication with google
