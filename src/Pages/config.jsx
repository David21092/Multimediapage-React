// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDnu6FmB6ySBRKSieUg6LOtBJZDOT_dPM',
  authDomain: 'backend-multimediapage.firebaseapp.com',
  projectId: 'backend-multimediapage',
  storageBucket: 'backend-multimediapage.appspot.com',
  messagingSenderId: '286683836969',
  appId: '1:286683836969:web:8eaf093f4fd0fcbb2d6238'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
