import * as uuid from 'uuid/v4';

import { IAction, IEvent } from '../constants/types';
import { EActionKey } from '../constants/enum';
import { CalendarEvent } from '../models/CalendarEvent';

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
  userEmail: string,
  userName: string,
  userPhotoUrl: string
): IAction => ({
  type: EActionKey.LOGIN_SUCCESS,
  payload: {
    userEmail,
    userName,
    userPhotoUrl
  }
});

export const logoutSuccess = (): IAction => ({
  type: EActionKey.LOGOUT_SUCCESS
});
