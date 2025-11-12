// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "sua chave",
    authDomain: "seu dominio",
    projectId: "seu projeto id",
    storageBucket: "seu bucket",
    messagingSenderId: "seu sender id",
    appId: "seu app id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
