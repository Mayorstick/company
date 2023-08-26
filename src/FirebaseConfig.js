// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA89sXs7GFYlwR8BFVcfCHA4RW5eL37z_s",
  authDomain: "companyproject-2b0bf.firebaseapp.com",
  projectId: "companyproject-2b0bf",
  storageBucket: "companyproject-2b0bf.appspot.com",
  messagingSenderId: "446200500656",
  appId: "1:446200500656:web:0fa61ef70e7cc4e97ac675",
  measurementId: "G-X46KDJM652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export{app, fireDb};