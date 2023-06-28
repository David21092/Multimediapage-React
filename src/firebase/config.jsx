/* eslint-disable */
import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAIIp6r2v7uVqveewfFvau8F5lKgdN68jU",
  authDomain: "multimediapage-deploy.firebaseapp.com",
  projectId: "multimediapage-deploy",
  storageBucket: "multimediapage-deploy.appspot.com",
  messagingSenderId: "592018841413",
  appId: "1:592018841413:web:18671f55d59af02e4c282c",
  measurementId: "G-X0GSKDCG2Z"
};

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };
