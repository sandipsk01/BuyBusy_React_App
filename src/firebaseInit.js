// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDw8GRRv49CwVMHKD6RjuLItAriDcgDs",
  authDomain: "buybusy-9e799.firebaseapp.com",
  projectId: "buybusy-9e799",
  storageBucket: "buybusy-9e799.appspot.com",
  messagingSenderId: "151760256112",
  appId: "1:151760256112:web:3515620c0f94c80af348b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
