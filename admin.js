function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(e => alert(e.message));
}

function updateHome() {
  const db = firebase.firestore();
  const title = document.getElementById('titleInput').value;
  const desc = document.getElementById('descInput').value;
  db.collection('content').doc('home').set({ title, desc });
}

function updateSettings() {
  const db = firebase.firestore();
  const shipping = parseInt(document.getElementById('freeShipping').value);
  const cod = document.getElementById('enableCOD').checked;
  db.collection('settings').doc('shipping').set({ shipping, cod });
}