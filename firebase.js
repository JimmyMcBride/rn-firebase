import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase app init and config
const firebaseConfig = {
  apiKey: "AIzaSyAVoxhk11mGv9SaWpq_LfS757JGyO0JQkI",
  authDomain: "react-native-auth-7dc12.firebaseapp.com",
  databaseURL: "https://react-native-auth-7dc12.firebaseio.com",
  projectId: "react-native-auth-7dc12",
  storageBucket: "react-native-auth-7dc12.appspot.com",
  messagingSenderId: "350650052289",
  appId: "1:350650052289:web:01ebdc91cd893af9892e40",
  measurementId: "G-BHQ72CX52Y"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;
