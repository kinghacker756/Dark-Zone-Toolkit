// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBraVvrOf5Hv7OWLEeROpCQKX2OMIunV7g",
  authDomain: "dark-zone-toolkit-5a09c.firebaseapp.com",
  projectId: "dark-zone-toolkit-5a09c",
  storageBucket: "dark-zone-toolkit-5a09c.firebasestorage.app",
  messagingSenderId: "619135990592",
  appId: "1:619135990592:web:e0e49f9bce759b025218a5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Admin credentials (change these for production!)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "darkzone123";
