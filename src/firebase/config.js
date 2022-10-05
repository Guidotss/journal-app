import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDhMbw_lr27CWwDFQMWJuX3l029iDdprvg",
  authDomain: "react-cursos-fd005.firebaseapp.com",
  projectId: "react-cursos-fd005",
  storageBucket: "react-cursos-fd005.appspot.com",
  messagingSenderId: "100286984605",
  appId: "1:100286984605:web:279a6b157bc171a0913f74"
};

export const fireBaseApp  = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(fireBaseApp);
export const fireBaseDB   = getFirestore(fireBaseApp);