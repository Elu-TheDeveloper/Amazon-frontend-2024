// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-AgAeruQO7LyKAcS7zG4Wt4xY8WuSO_U",
  authDomain: "clone-ela.firebaseapp.com",
  projectId: "clone-ela",
  storageBucket: "clone-ela.appspot.com",
  messagingSenderId: "808400712323",
  appId: "1:808400712323:web:3fd555050cc96c66b961b6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()