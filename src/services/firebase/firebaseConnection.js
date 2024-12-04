import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5L66VjaxAcdCRAn_hA8MFTt2TEX8kTGA",
  authDomain: "grupo-p10.firebaseapp.com",
  projectId: "grupo-p10",
  storageBucket: "grupo-p10.firebasestorage.app",
  messagingSenderId: "1094520012686",
  appId: "1:1094520012686:web:6595180159481dc63eeedf",
  measurementId: "G-XX8DK00SX8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}