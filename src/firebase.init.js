import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEglSPAo-C6UaJS41shxybtY3fATrFnBk",
  authDomain: "doctors-portal-f6f96.firebaseapp.com",
  projectId: "doctors-portal-f6f96",
  storageBucket: "doctors-portal-f6f96.appspot.com",
  messagingSenderId: "140198256557",
  appId: "1:140198256557:web:88a08d378d6be031970b24"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;