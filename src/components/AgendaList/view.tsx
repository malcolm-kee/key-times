import * as React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

import { ICalendarEvent } from '../../constants/types';
import { DrawerNavigator } from '../DrawerNavigator';

export interface IAgendaListViewProps {
  events: ICalendarEvent[];
}

export const AgendaListView = (props: IAgendaListViewProps) => {
  const { events } = props;

  return (
    <DrawerNavigator navTitle="Agenda">
      <List>
        {events.map(event => (
          <ListItem key={event.id} divider={true}>
            <ListItemText primary={event.title} secondary={event.getPeriod()} />
          </ListItem>
        ))}
      </List>
    </DrawerNavigator>
  );
};
