// scripts/firebase.js

// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// ✅ Replace with your real Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyAOjNNbZicYA0BdWxrJeaKo6a8-97B0edQ",
  authDomain: "radhavanam-76.firebaseapp.com",
  projectId: "radhavanam-76",
  storageBucket: "radhavanam-76.appspot.com",
  messagingSenderId: "39126946397",
  appId: "1:39126946397:web:69bcfb4eb0bbc31a4733b4",
  measurementId: "G-Q9R5M417CJ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
