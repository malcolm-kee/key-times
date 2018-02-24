import { IEvent } from '../constants/types';

export class CalendarEvent {
  id: string;
  title: string;
  date: Date;

  constructor(event: IEvent) {
    this.id = event.id;
    this.title = event.title;
    this.date = event.date;
  }

  getPlainObj(): IEvent {
    return {
      id: this.id,
      title: this.title,
      date: this.date
    };
  }
}
