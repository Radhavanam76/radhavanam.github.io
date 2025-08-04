// scripts/admin.js
import { auth, db, storage } from './firebase.js';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Login
const loginForm = document.getElementById('login-form');
const adminPanel = document.getElementById('admin-panel');
const logoutBtn = document.getElementById('logout-btn');

onAuthStateChanged(auth, user => {
  if (user) {
    loginForm.style.display = 'none';
    adminPanel.style.display = 'block';
  } else {
    loginForm.style.display = 'block';
    adminPanel.style.display = 'none';
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert('Login Failed: ' + err.message);
  }
});

logoutBtn.addEventListener('click', async () => {
  await signOut(auth);
});

// Save plant details
document.getElementById('save-plant').addEventListener('click', async () => {
  const name = document.getElementById('plant-name').value;
  const desc = document.getElementById('plant-desc').value;
  const imgFile = document.getElementById('plant-img').files[0];

  if (!name || !desc || !imgFile) {
    alert("Please fill all fields");
    return;
  }

  const imgRef = ref(storage, `plants/${imgFile.name}`);
  await uploadBytes(imgRef, imgFile);
  const imgURL = await getDownloadURL(imgRef);

  await setDoc(doc(db, "plants", name), {
    name,
    description: desc,
    image: imgURL
  });

  alert("Plant Saved Successfully");
});

// Theme switcher
document.querySelectorAll('.theme-select').forEach(btn => {
  btn.addEventListener('click', async () => {
    const selectedTheme = btn.dataset.theme;
    await updateDoc(doc(db, "settings", "theme"), { selected: selectedTheme });
    alert("Theme updated! Refresh homepage to see change.");
  });
});
