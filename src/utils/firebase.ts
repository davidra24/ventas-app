import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfw6D0IKJcM9NhyWNUz6RAoDqqtOZrXo",
  authDomain: "ventas-12e3e.firebaseapp.com",
  databaseURL: "https://ventas-12e3e.firebaseio.com",
  projectId: "ventas-12e3e",
  storageBucket: "ventas-12e3e.appspot.com",
  messagingSenderId: "693377048924",
  appId: "1:693377048924:web:ea5c15f22314ee0fc3e199",
  measurementId: "G-EBGWWV7T9W",
};
// Initialize Firebase
export const firebaseApp = () => firebase.initializeApp(firebaseConfig);
