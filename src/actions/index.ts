import * as uuid from 'uuid/v4';

import { IAction, IEvent, IUser } from '../constants/types';
import { EActionKey } from '../constants/enum';
import { CalendarEvent } from '../models/CalendarEvent';

export const restoreEvents = (events: IEvent[]): IAction<IEvent[]> => ({
  type: EActionKey.RESTORE_EVENTS,
  payload: events
});

export const setEvents = (
  events: CalendarEvent[]
): IAction<{ data: IEvent[] }> => ({
  type: EActionKey.SET_EVENTS,
  payload: {
    data: events.map(event => event.getPlainObj())
  }
});

export const addEvent = (
  title: string,
  startDate: string,
  endDate: string
): IAction<IEvent> => ({
  type: EActionKey.ADD_EVENT,
  payload: {
    title,
    startDate,
    endDate,
    id: uuid()
  }
});

export const loginSuccess = (
  userEmail: string | null,
  userName: string | null,
  userPhotoUrl: string | null
): IAction<IUser> => ({
  type: EActionKey.LOGIN_SUCCESS,
  payload: {
    name: userName,
    email: userEmail,
    photoUrl: userPhotoUrl
  }
});

export const logoutSuccess = (): IAction => ({
  type: EActionKey.LOGOUT_SUCCESS,
  payload: undefined
});
