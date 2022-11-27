// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdklyXfN7rKvIHYEWoGIjVBwRP7TiBw04",
    authDomain: "projeto1-mobile-avancado.firebaseapp.com",
    projectId: "projeto1-mobile-avancado",
    storageBucket: "projeto1-mobile-avancado.appspot.com",
    messagingSenderId: "438965379219",
    appId: "1:438965379219:web:b8e4dc0fe4b33a99daad66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
