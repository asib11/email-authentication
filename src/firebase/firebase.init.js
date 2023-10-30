// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZzvduMSifzEquuqUXs7JnV7qNHNC3sZQ",
  authDomain: "authentication-email-e6ebc.firebaseapp.com",
  projectId: "authentication-email-e6ebc",
  storageBucket: "authentication-email-e6ebc.appspot.com",
  messagingSenderId: "8263766543",
  appId: "1:8263766543:web:1671d042be60980766097a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const auth = getAuth(app);

export default app;
