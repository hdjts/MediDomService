import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyALbAnmWbKsxyL89hUzJsevD-Ppu9JO6NE",
    authDomain: "medidom-77e9d.firebaseapp.com",
    projectId: "medidom-77e9d",
    storageBucket: "medidom-77e9d.appspot.com",
    messagingSenderId: "212818304376",
    appId: "1:212818304376:web:6e51c345e1888679e43c8d"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export {
      auth,
  }