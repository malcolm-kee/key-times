import { User } from 'firebase';
import { IUser } from '../constants/types';
import { firebase } from '../config/firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const mapUserToModel = (googleUser: User): IUser => ({
  name: googleUser.displayName,
  email: googleUser.email,
  photoUrl: googleUser.photoURL
});

interface ISubscriber {
  (user: IUser | null): void;
}

let authStateChangeSubs: ISubscriber[] = [];

firebase.auth().onAuthStateChanged(gUser => {
  if (gUser) {
    const user = mapUserToModel(gUser);
    authStateChangeSubs.forEach(subscriber => subscriber(user));
  } else {
    authStateChangeSubs.forEach(subscriber => subscriber(null));
  }
});

export const signInGoogle = () =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        const { user } = result;
        resolve(mapUserToModel(user));
      })
      .catch(err => reject(err));
  });

export const signOut = () =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve())
      .catch(err => reject(err));
  });

export const subscribeToAuthChange = (fn: (user: IUser) => void) => {
  const user = firebase.auth().currentUser;

  if (user) {
    fn(mapUserToModel(user));
  }

  authStateChangeSubs = authStateChangeSubs.concat(fn);

  return () => {
    authStateChangeSubs = authStateChangeSubs.filter(sub => sub !== fn);
  };
};
