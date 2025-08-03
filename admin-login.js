import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redirect to admin dashboard
      window.location.href = "/admin-dashboard.html";
    })
    .catch((error) => {
      errorMsg.textContent = "Login failed: " + error.message;
    });
});
