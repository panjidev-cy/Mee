// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcR8D3ODYoMgcu2PfG2jUzNJycO-FQvyo",
  authDomain: "vibloo-vercel-app.firebaseapp.com",
  projectId: "vibloo-vercel-app",
  storageBucket: "vibloo-vercel-app.firebasestorage.app",
  messagingSenderId: "836638307271",
  appId: "1:836638307271:web:c3699b9d75bf784e775fe2",
  measurementId: "G-C072TLFZHK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized successfully");
export { db };
