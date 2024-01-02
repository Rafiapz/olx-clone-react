import {initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAgXT-SNRvh9q7elVkI7lMNIXAzqa0Ix2M",
    authDomain: "clone-olx-d895c.firebaseapp.com",
    projectId: "clone-olx-d895c",
    storageBucket: "clone-olx-d895c.appspot.com",
    messagingSenderId: "178464189447",
    appId: "1:178464189447:web:206512e0c53ea077944ea2",
    measurementId: "G-GQS93ZJEXL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage=getStorage(app)
