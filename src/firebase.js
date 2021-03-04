import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCVhhqpk3Ov3E47c-tu5zrA5CvKkFoRL_Q",
    authDomain: "todolist-24076.firebaseapp.com",
    databaseURL: "https://todolist-24076-default-rtdb.firebaseio.com",
    projectId: "todolist-24076",
    storageBucket: "todolist-24076.appspot.com",
    messagingSenderId: "574103467196",
    appId: "1:574103467196:web:a9eb0722029bd792660cb9",
    measurementId: "G-ZNT885S5Z2",
});
  
export { firebaseConfig as firebase };