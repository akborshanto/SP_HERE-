// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.apiKey,
//   authDomain:import.meta.env.authDomain,
//   projectId:import.meta.env.projectId,
//   storageBucket:import.meta.env.storageBucket,
//   messagingSenderId:import.meta.env.messagingSenderId,
//   appId:import.meta.env.appId
// };
const firebaseConfig = {
    apiKey: "AIzaSyAvo1Dr-_9Wgfghf5KeEtMf4fpbPfpUY7U",
    authDomain: "sp-here.firebaseapp.com",
    projectId: "sp-here",
    storageBucket: "sp-here.appspot.com",
    messagingSenderId: "850577005489",
    appId: "1:850577005489:web:8f5cd872f532cd0b7fbb90"
  };
  
// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
