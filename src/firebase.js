import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztQNrVjfgFzoc-zQA4yQhWFhjMZWVj4g",
  authDomain: "leadintel-8cd29.firebaseapp.com",
  projectId: "leadintel-8cd29",
  storageBucket: "leadintel-8cd29.firebasestorage.app",
  messagingSenderId: "468624357880",
  appId: "1:468624357880:web:c32f5487ed72a8c2aa3e0d",
  measurementId: "G-TFNK1X1560",
};
console.log(import.meta.env.REACT_APP_FIREBASE_API_KEY, "api");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
