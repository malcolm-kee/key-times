import * as fbase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDB4L7ZcGHRSI3lO6XO87eM_tNUUE39eFg',
  authDomain: 'key-times.firebaseapp.com',
  databaseURL: 'https://key-times.firebaseio.com',
  projectId: 'key-times',
  storageBucket: 'key-times.appspot.com',
  messagingSenderId: '297643231287'
};

fbase.initializeApp(config);

export const firebase = fbase;

export const db = fbase.firestore();
