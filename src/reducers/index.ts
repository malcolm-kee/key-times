import { combineReducers } from 'redux';
import { IStore, ICalendarEvent } from '../constants/types';
import {
  eventReducer,
  selectEvents as selectEventsFromSubstore
} from './eventReducer';

// faking data
// const DEFAULT_STATE: IStore = {
//   data: {}
// };

export const rootReducer = combineReducers({
  event: eventReducer
});

/* selectors */
export const selectEvents = (state: IStore): ICalendarEvent[] =>
  selectEventsFromSubstore(state.event);
