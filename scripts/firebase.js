import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

// 🟢 NAVIGATION
const tabs = document.querySelectorAll(".sidebar li");
const panels = document.querySelectorAll("main section.panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const sectionId = tab.getAttribute("data-section");
    panels.forEach(p => p.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
  });
});

// 🟢 LOGOUT
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html"; // redirect to login
  });
});

// 🟢 CHECK AUTH
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// 🟢 PRODUCT UPLOAD
document.getElementById("addProduct").addEventListener("click", async () => {
  const name = document.getElementById("productName").value;
  const desc = document.getElementById("productDesc").value;
  const price = document.getElementById("productPrice").value;
  const file = document.getElementById("productImage").files[0];

  if (!name || !desc || !price || !file) {
    alert("Please fill all fields");
    return;
  }

  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);

  console.log("✅ Product added:");
  console.log({ name, desc, price, imageUrl });

  alert("Product uploaded (console only – DB integration pending)");
});

// 🟢 BLOG UPLOAD
document.getElementById("postBlog").addEventListener("click", async () => {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;

  if (!title || !content) {
    alert("Blog title and content are required.");
    return;
  }

  console.log("✅ Blog posted:");
  console.log({ title, content });

  alert("Blog post created (console only – DB integration pending)");
});

// 🟢 THEME SWITCH
document.querySelectorAll(".theme-box").forEach(box => {
  box.addEventListener("click", () => {
    document.querySelectorAll(".theme-box").forEach(b => b.classList.remove("active"));
    box.classList.add("active");

    const selectedTheme = box.getAttribute("data-theme");
    console.log("Theme selected:", selectedTheme);
    alert("Theme applied (console only – dynamic theme pending)");
  });
});

// 🟢 SAVE SETTINGS
document.getElementById("saveSettings").addEventListener("click", () => {
  const siteTitle = document.getElementById("siteTitle").value;
  const whatsapp = document.getElementById("whatsappNumber").value;
  const freeShipping = document.getElementById("freeShipping").value;
  const codEnabled = document.getElementById("codCheckbox").checked;

  console.log("✅ Site settings updated:");
  console.log({ siteTitle, whatsapp, freeShipping, codEnabled });

  alert("Settings saved (console only – DB integration pending)");
});
