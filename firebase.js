// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnqLPECxSfVVXcSDAq4f1PMd-YF6qVh28",
    authDomain: "instagram-clone-ab23f.firebaseapp.com",
    projectId: "instagram-clone-ab23f",
    storageBucket: "instagram-clone-ab23f.appspot.com",
    messagingSenderId: "916711784804",
    appId: "1:916711784804:web:097fa0b1b42173d34cfa71"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
