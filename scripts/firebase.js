// scripts/firebase.js

// Import Firebase modules (using CDN method)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase config (already provided by you)
const firebaseConfig = {
  apiKey: "AIzaSyAOjNNbZicYA0BdWxrJeaKo6a8-97B0edQ",
  authDomain: "radhavanam-76.firebaseapp.com",
  projectId: "radhavanam-76",
  storageBucket: "radhavanam-76.firebasestorage.app",
  messagingSenderId: "39126946397",
  appId: "1:39126946397:web:69bcfb4eb0bbc31a4733b4",
  measurementId: "G-Q9R5M417CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, signInWithEmailAndPassword };
