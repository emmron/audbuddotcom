import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    OAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLY3gExeJDCmPfVBD4-8hXHsYQhHgnKv8",
    authDomain: "ausbuddotcom.firebaseapp.com",
    projectId: "ausbuddotcom",
    storageBucket: "ausbuddotcom.appspot.com",
    messagingSenderId: "33898154226",
    appId: "1:33898154226:web:3f4c194dc26c5a13da686b",
    measurementId: "G-PPP9C6D8Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
    auth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    OAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
}; 