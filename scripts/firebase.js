// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAOjNNbZicYA0BdWxrJeaKo6a8-97B0edQ",
  authDomain: "radhavanam-76.firebaseapp.com",
  projectId: "radhavanam-76",
  storageBucket: "radhavanam-76.appspot.com",
  messagingSenderId: "39126946397",
  appId: "1:39126946397:web:69bcfb4eb0bbc31a4733b4",
  measurementId: "G-Q9R5M417CJ"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export for other scripts
export { auth, db, storage };
