import { EActionKey } from './enum';

export interface IKeyList<T> {
  [key: string]: T;
}

export interface IEventStore {
  data: IKeyList<IEvent>;
}

export interface IStore {
  event: IEventStore;
}

// tslint:disable-next-line:no-any
export interface IAction<P = any> {
  type: EActionKey;
  payload?: P;
}

export interface IEvent {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  // @TODO
  // location:
  // category:
  // who:
  // reminder:
  // note:
}

export interface ICalendarEvent {
  id: string;
  startDate: Date;
  endDate: Date;
  title: string;
  getPlainObj: () => IEvent;
  getPeriod: () => string;
}
