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
  data: {
    a111: {
      id: 'a111',
      title: 'Quick Chat',
      startDate: new Date(2018, 1, 27, 8, 20).toISOString(),
      endDate: new Date(2018, 1, 27, 11, 30).toISOString()
    },
    a112: {
      id: 'a112',
      title: 'Slow Chat',
      startDate: new Date(2018, 1, 27, 12, 20).toISOString(),
      endDate: new Date(2018, 1, 27, 12, 30).toISOString()
    }
  }
};

export const eventReducer = (
  state: IEventStore = DEFAULT_STATE,
  action: IAction
): IEventStore => {
  switch (action.type) {
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
