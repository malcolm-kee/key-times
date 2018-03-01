import {
  IAction,
  IEventStore,
  IKeyList,
  IEvent,
  ICalendarEvent
} from '../constants/types';
import { EActionKey } from '../constants/enum';
import { CalendarEvent } from '../models/CalendarEvent';

// faking data
// const DEFAULT_STATE: IStore = {
//   data: {}
// };

const DEFAULT_STATE: IEventStore = {
  data: {}
};

export const eventReducer = (
  state: IEventStore = DEFAULT_STATE,
  action: IAction
): IEventStore => {
  switch (action.type) {
    case EActionKey.RESTORE_EVENTS:
      return {
        ...state,
        data: action.payload.reduce((acc: IKeyList<IEvent>, event: IEvent) => {
          return {
            ...acc,
            [event.id]: event
          };
        }, {})
      };

    case EActionKey.SET_EVENTS:
      return {
        ...state,
        data: action.payload.data.reduce(
          (acc: IKeyList<IEvent>, event: IEvent) => {
            return {
              ...acc,
              [event.id]: event
            };
          },
          {}
        )
      };

    case EActionKey.ADD_EVENT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      };

    default:
      return state;
  }
};

/* selectors */
export const selectEvents = (state: IEventStore): ICalendarEvent[] =>
  Object.keys(state.data).map(idKey => new CalendarEvent(state.data[idKey]));
