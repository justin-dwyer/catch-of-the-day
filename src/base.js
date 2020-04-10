import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMWv74-dt_Ymg_-YaP00SAu9CTKfKeOF0",
  authDomain: "catch-of-the-day-justin-dwyer.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-justin-dwyer.firebaseio.com",
  projectId: "catch-of-the-day-justin-dwyer",
  storageBucket: "catch-of-the-day-justin-dwyer.appspot.com",
  messagingSenderId: "218125804298",
  appId: "1:218125804298:web:318eaa20b5f1f563fd10f3",
  measurementId: "G-0X79W4QMPD"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

//This is a default export
export default base;
