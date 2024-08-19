
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, onAuthStateChanged} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpRVDkhsSWG6a8Qbo5_qJRqQW7fPE7_7s",
  authDomain: "checkit-c93c0.firebaseapp.com",
  projectId: "checkit-c93c0",
  storageBucket: "checkit-c93c0.appspot.com",
  messagingSenderId: "566291644738",
  appId: "1:566291644738:web:0312b4154ede006175c8db"
};


// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbase = getFirestore(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('LOGGED IN' )
    console.log(user)
    // const registerBtn = document.getElementsByClassName('DrugsListing')
    // registerBtn.style.display = 'block';
  } else {
    console.log('NO USER INFO - SIGNUP or LOGIN');
  }
});

export {auth, dbase, app as default }