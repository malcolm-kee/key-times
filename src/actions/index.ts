import { IAction, IEvent } from '../constants/types';
import { EActionKey } from '../constants/enum';
import { CalendarEvent } from '../models/CalendarEvent';

export const setEvents = (
  events: CalendarEvent[]
): IAction<{ data: IEvent[] }> => ({
  type: EActionKey.SET_EVENTS,
  payload: {
    data: events.map(calendar => calendar.getPlainObj())
  }
});

export const addEvent = (event: CalendarEvent): IAction<IEvent> => ({
  type: EActionKey.ADD_EVENT,
  payload: event.getPlainObj()
});
