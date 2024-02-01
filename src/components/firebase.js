import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyCREMyreZA5UTu3YNjYHBE9TDq0ba-FUVc",
  authDomain: "clone-5ea4f.firebaseapp.com",
  projectId: "clone-5ea4f",
  storageBucket: "clone-5ea4f.appspot.com",
  messagingSenderId: "121654566147",
  appId: "1:121654566147:web:052f7f6ec3d2abf52d1d36",
  measurementId: "G-NQQQ7R5QDF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.direstore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();



export { db, auth, provider};