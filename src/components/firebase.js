
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCREMyreZA5UTu3YNjYHBE9TDq0ba-FUVc",
  authDomain: "clone-5ea4f.firebaseapp.com",
  projectId: "clone-5ea4f",
  storageBucket: "clone-5ea4f.appspot.com",
  messagingSenderId: "121654566147",
  appId: "1:121654566147:web:052f7f6ec3d2abf52d1d36",
  measurementId: "G-NQQQ7R5QDF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };