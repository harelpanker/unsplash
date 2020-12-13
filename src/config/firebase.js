import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGNtDwUiiBzbdcs8tL3TIeiV4_ADQeFLw",
    authDomain: "unsplash-harel.firebaseapp.com",
    databaseURL: "https://unsplash-harel.firebaseio.com",
    projectId: "unsplash-harel",
    storageBucket: "unsplash-harel.appspot.com",
    messagingSenderId: "522755898078",
    appId: "1:522755898078:web:c59bb4d21a0719cbeba04f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase