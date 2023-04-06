import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkDk7HMW_i-R3eEfp215DPVGH9YupJLRg",
  authDomain: "sheki-portfolio.firebaseapp.com",
  databaseURL: "https://sheki-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sheki-portfolio",
  storageBucket: "sheki-portfolio.appspot.com",
  messagingSenderId: "158546561407",
  appId: "1:158546561407:web:1523100a52577513fbb24a",
  measurementId: "G-ZLGVGZ1VE0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, app, storage, db };