import { IEvent, ICalendarEvent } from '../constants/types';
import { getFriendlyPeriod } from '../utils/date';

export class CalendarEvent implements ICalendarEvent {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;

  constructor(event: IEvent) {
    this.id = event.id;
    this.title = event.title;
    this.startDate = new Date(event.startDate);
    this.endDate = new Date(event.endDate);
  }

  getPlainObj(): IEvent {
    return {
      id: this.id,
      title: this.title,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString()
    };
  }

  getPeriod(): string {
    return getFriendlyPeriod(this.startDate, this.endDate);
  }
}
