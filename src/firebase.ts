import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC5ahd9Y2sQEzkM1t53FqhQYHiDTmFSmwo",
    authDomain: "propvista-2465b.firebaseapp.com",
    projectId: "propvista-2465b",
    storageBucket: "propvista-2465b.firebasestorage.app",
    messagingSenderId: "612827745508",
    appId: "1:612827745508:web:56dfbafaa015d904ff30f1",
    measurementId: "G-390T0D0KC1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);