// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3yiksyBPWNFLQ08IT9y9qeHm4M0dt7bc",
  authDomain: "portafolio-jlfc.firebaseapp.com",
  projectId: "portafolio-jlfc",
  storageBucket: "portafolio-jlfc.firebasestorage.app",
  messagingSenderId: "677782884130",
  appId: "1:677782884130:web:be88b716b33383f3f21f7b",
  measurementId: "G-XHM04VEV72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);