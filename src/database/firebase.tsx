// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjUDl5B4xamdtaZgnwpw_EImU29xmo3As",
  authDomain: "rwanda-rejser.firebaseapp.com",
  projectId: "rwanda-rejser",
  storageBucket: "rwanda-rejser.appspot.com",
  messagingSenderId: "804130737859",
  appId: "1:804130737859:web:fadcd488ce0cebc99fdc76",
  measurementId: "G-E8J7JP2HR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
