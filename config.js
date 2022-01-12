  import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyBdnA61PrES75Gm_s19VhJfsDE2QnFWpbE",
  authDomain: "schoolattendanceapp-pro60.firebaseapp.com",
  databaseURL: "https://schoolattendanceapp-pro60-default-rtdb.firebaseio.com",
  projectId: "schoolattendanceapp-pro60",
  storageBucket: "schoolattendanceapp-pro60.appspot.com",
  messagingSenderId: "1049868374345",
  appId: "1:1049868374345:web:148ad798e6feb6adffca98"
  };

 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
