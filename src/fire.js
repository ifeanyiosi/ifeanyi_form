// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDEh9guj5gu-vqnKTzaYKrwRTqK7Bil3bI",
  authDomain: "login-form-8ebed.firebaseapp.com",
  projectId: "login-form-8ebed",
  storageBucket: "login-form-8ebed.appspot.com",
  messagingSenderId: "626907928846",
  appId: "1:626907928846:web:bf406018f59ed0259f5f5f"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const fire = firebase.auth();



export default fire;