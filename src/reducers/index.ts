import { combineReducers } from 'redux';
import { IStore, ICalendarEvent, IAuthStore } from '../constants/types';
import {
  eventReducer,
  selectEvents as selectEventsFromSubstore
} from './eventReducer';
import { authReducer } from './authReducer';

// faking data
// const DEFAULT_STATE: IStore = {
//   data: {}
// };

export const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer
});

/* selectors */
export const selectEvents = (state: IStore): ICalendarEvent[] =>
  selectEventsFromSubstore(state.event);

export const selectAuthState = (state: IStore): IAuthStore => state.auth;
