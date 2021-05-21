import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByPQGjHdIR27L8ZFdK7gyy3mcqPTJ_QUI",
  authDomain: "todoapp-a8b3f.firebaseapp.com",
  projectId: "todoapp-a8b3f",
  storageBucket: "todoapp-a8b3f.appspot.com",
  messagingSenderId: "742977118460",
  appId: "1:742977118460:web:b36c9a73387053262c3779"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export { firebase };