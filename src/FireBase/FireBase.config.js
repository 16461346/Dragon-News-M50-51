// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfC0tp34MP9K5XnPajMVB1z9eJSnGHMoU",
  authDomain: "dragon-news-m51.firebaseapp.com",
  projectId: "dragon-news-m51",
  storageBucket: "dragon-news-m51.firebasestorage.app",
  messagingSenderId: "703481680723",
  appId: "1:703481680723:web:44925f1c6c0dc79d0407a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;