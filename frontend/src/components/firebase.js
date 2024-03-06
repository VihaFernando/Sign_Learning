import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage,ref} from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAFQh3x-VFk6P1M21OHZFoSeBaMCrrZ-_Y",
  authDomain: "signlearning-6c06e.firebaseapp.com",
  projectId: "signlearning-6c06e",
  storageBucket: "signlearning-6c06e.appspot.com",
  messagingSenderId: "838194290315",
  appId: "1:838194290315:web:77acb3a5ac2e9c7a227e8e",
  measurementId: "G-V88KR27NT6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export default firebase;
export {auth, analytics,firestore,storage,database,ref,getDownloadURL};