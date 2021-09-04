import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAqTnrfuYujDLoxydoPl6DQQ98P6MxpXc",
    authDomain: "tiendaonline-ad1a6.firebaseapp.com",
    projectId: "tiendaonline-ad1a6",
    storageBucket: "tiendaonline-ad1a6.appspot.com",
    messagingSenderId: "350453205397",
    appId: "1:350453205397:web:f82fe440a090b121af0e9c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const getData = () => getFirestore(app);
