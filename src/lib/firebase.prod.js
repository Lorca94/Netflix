import { initializeApp } from 'firebase/app';
// import { seedDatabase } from '../seed';

// Config firebase
const config = {
    apiKey: "AIzaSyBIVOnIxMmaVxYCxQd8XEbPUVEPtKpn5Gw",

    authDomain: "netflix-d4bbd.firebaseapp.com",
  
    projectId: "netflix-d4bbd",
  
    storageBucket: "netflix-d4bbd.appspot.com",
  
    messagingSenderId: "789096078799",
  
    appId: "1:789096078799:web:cbf3cae24b8059c0d806ba"  
};

const firebase = initializeApp(config);


//seedDatabase(firebase);

export { firebase };