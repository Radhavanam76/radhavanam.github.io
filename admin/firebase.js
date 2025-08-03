// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Temporary admin check
      if (user.email === "admin@radhavanam.in") {
        window.location.href = "/admin-dashboard.html"; // Replace with your admin page
      } else {
        alert("Access denied. You are not an admin.");
      }
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Login failed: " + error.message);
    });
});
