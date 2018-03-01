import { IEvent } from '../constants/types';
import { db } from '../config/firebase';

const eventsRef = db.collection('events');

export const subscribe = (subscriber: (event: IEvent[]) => void): void => {
  eventsRef.onSnapshot(doc => {
    const result = doc.docs.map(eventDoc => ({
      ...eventDoc.data(),
      id: eventDoc.id
    }));
    subscriber(result as IEvent[]);
  });
};

export const add = (event: {
  startDate: string;
  endDate: string;
  title: string;
}): Promise<null> =>
  new Promise((resolve, reject) => {
    eventsRef
      .add(event)
      .then(docRef => {
        console.log('events added with docRef', docRef);
        resolve();
      })
      .catch(err => {
        console.error('events added hit error', err);
        reject(err);
      });
  });
