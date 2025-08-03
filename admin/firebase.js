// /admin/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOjNNbZicYA0BdWxrJeaKo6a8-97B0edQ",
  authDomain: "radhavanam-76.firebaseapp.com",
  projectId: "radhavanam-76",
  storageBucket: "radhavanam-76.firebasestorage.app",
  messagingSenderId: "39126946397",
  appId: "1:39126946397:web:69bcfb4eb0bbc31a4733b4",
  measurementId: "G-Q9R5M417CJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
