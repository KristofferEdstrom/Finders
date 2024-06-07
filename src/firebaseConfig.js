// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnOsyonvGYr6Yv-115KAVsme9FO3tre1g",
    authDomain: "findersfee-2956c.firebaseapp.com",
    projectId: "findersfee-2956c",
    storageBucket: "findersfee-2956c.appspot.com",
    messagingSenderId: "517266480284",
    appId: "1:517266480284:web:9e6266934153d661742159"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };