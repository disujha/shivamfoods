// firebase/initialize.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo3CapApySXvQpWQwIFpfyhEtgiVMdOSk",
  authDomain: "shivamfoods-270c6.firebaseapp.com",
  projectId: "shivamfoods-270c6",
  storageBucket: "shivamfoods-270c6.firebasestorage.app",
  messagingSenderId: "747275370280",
  appId: "1:747275370280:web:4c6a3bdf0e774721741a1d",
  measurementId: "G-543DWNLR3L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
