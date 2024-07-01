import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDOCQdFDtYrEIPhnCubSRFvZx1PoAllW8s",
    authDomain: "testys-71128.firebaseapp.com",
    projectId: "testys-71128",
    storageBucket: "testys-71128.appspot.com",
    messagingSenderId: "832737398435",
    appId: "1:832737398435:web:0808276ef0cde498f7f916"
  };

  const app = initializeApp(firebaseConfig);
  export default app