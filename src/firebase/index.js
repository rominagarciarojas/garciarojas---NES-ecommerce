import firebase from "frebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCySh3G7j4kCLsTUsCFcBFInHDa6bLGPSQ",
    authDomain: "nes-ecommerce-ed8fa.firebaseapp.com",
    projectId: "nes-ecommerce-ed8fa",
    storageBucket: "nes-ecommerce-ed8fa.appspot.com",
    messagingSenderId: "222642475414",
    appId: "1:222642475414:web:8c02d8396ab1148f358db7",
    measurementId: "G-YRCNT23J1R"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirebase = () => firebase.firestore(app);