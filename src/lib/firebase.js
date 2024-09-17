
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

apiKey: "AIzaSyDAYUyp7IJADOuo-ufhNmvqLFgOH_aVo9M",
  authDomain: "reactchat-eff14.firebaseapp.com",
  projectId: "reactchat-eff14",
  storageBucket: "reactchat-eff14.appspot.com",
  messagingSenderId: "441335146662",
  appId: "1:441335146662:web:77cf15f6f60fc3486d2c67"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
