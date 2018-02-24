import { rootReducer } from './index';
import { CalendarEvent } from '../models/CalendarEvent';
import { setEvents, addEvent } from '../actions';

describe('rootReducer', () => {
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

    expect(rootReducer(initialState, setEvents(testData))).toEqual(finalState);
  });

  test('add event', () => {
    const testData = new CalendarEvent(event1);
    const initialState = {
      data: {
        [event2.id]: event2
      }
    };
    const finalState = {
      data: {
        [event2.id]: event2,
        [event1.id]: event1
      }
    };
    expect(rootReducer(initialState, addEvent(testData))).toEqual(finalState);
  });
});
