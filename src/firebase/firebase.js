// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJpaAS7WmokbowdeBdF5eHN-NoDab7LoU",
  authDomain: "nextcv-68bd7.firebaseapp.com",
  projectId: "nextcv-68bd7",
  storageBucket: "nextcv-68bd7.appspot.com",
  messagingSenderId: "675480969367",
  appId: "1:675480969367:web:4d294ff802f65721d9c9d2",
  measurementId: "G-HTDV00BKLH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
};