/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIIp6r2v7uVqveewfFvau8F5lKgdN68jU',
  authDomain: 'multimediapage-deploy.firebaseapp.com',
  projectId: 'multimediapage-deploy',
  storageBucket: 'multimediapage-deploy.appspot.com',
  messagingSenderId: '592018841413',
  appId: '1:592018841413:web:18671f55d59af02e4c282c',
  measurementId: 'G-X0GSKDCG2Z'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }
