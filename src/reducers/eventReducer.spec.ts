import { eventReducer } from './eventReducer';
import { CalendarEvent } from '../models/CalendarEvent';
import { setEvents, addEvent } from '../actions';

describe('eventReducer', () => {
  const event1 = {
    id: '129d',
    title: 'Important agenda',
    startDate: new Date(2018, 0, 12).toISOString(),
    endDate: new Date(2018, 0, 12, 1).toISOString()
  };

  const event2 = {
    id: 'ds102-3',
    title: 'Another agenda',
    startDate: new Date(2018, 2, 12).toISOString(),
    endDate: new Date(2018, 2, 13).toISOString()
  };

  test('set events', () => {
    const testData = [new CalendarEvent(event1), new CalendarEvent(event2)];
    const initialState = {
      data: {}
    };
    const finalState = {
      data: {
        [event1.id]: event1,
        [event2.id]: event2
      }
    };

    expect(eventReducer(initialState, setEvents(testData))).toEqual(finalState);
  });

  test('add event', () => {
    const testData = event1;
    const action = addEvent(
      testData.title,
      testData.startDate,
      testData.endDate
    );
    const initialState = {
      data: {
        [event2.id]: event2
      }
    };
    if (typeof action.payload === 'undefined') {
      throw Error();
    }
    const finalState = {
      data: {
        [event2.id]: event2,
        [action.payload.id as string]: action.payload
      }
    };

    expect(eventReducer(initialState, action)).toEqual(finalState);
  });
});
