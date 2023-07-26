// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX-WiSefR0MqRXOevI49QwWn6J1ByOzCY",
  authDomain: "dooo-1d8ec.firebaseapp.com",
  projectId: "dooo-1d8ec",
  storageBucket: "dooo-1d8ec.appspot.com",
  messagingSenderId: "333527702175",
  appId: "1:333527702175:web:c23e45b04e44e1be8020aa",
  measurementId: "G-DR8C1YV08H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
