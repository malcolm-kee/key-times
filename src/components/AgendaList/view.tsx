import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles, Theme } from 'material-ui/styles';

import { ICalendarEvent } from '../../constants/types';
import { DrawerNavigator } from '../DrawerNavigator';
import { AddEventForm } from '../AddEventForm';

const decorate = withStyles((theme: Theme) => {
  const container: React.CSSProperties = {
    position: 'relative',
    flex: 1
  };

  const actionBtn: React.CSSProperties = {
    position: 'absolute',
    right: theme.spacing.unit * 2,
    bottom: theme.spacing.unit * 2
  };

  return {
    container,
    actionBtn
  };
});

export interface IAgendaListViewProps {
  events: ICalendarEvent[];
  showAddEventForm: boolean;
  onShowAddEventForm: () => void;
  onHideAddEventForm: () => void;
}

export const AgendaListView = decorate<IAgendaListViewProps>(
  ({
    events,
    showAddEventForm,
    onShowAddEventForm,
    onHideAddEventForm,
    classes
  }) => {
    return (
      <DrawerNavigator navTitle="Agenda">
        <div className={classes.container}>
          <List>
            {events.map(event => (
              <ListItem key={event.id} divider={true}>
                <ListItemText
                  primary={event.title}
                  secondary={event.getPeriod()}
                />
              </ListItem>
            ))}
          </List>
          <Button
            onClick={onShowAddEventForm}
            variant="fab"
            color="primary"
            className={classes.actionBtn}
          >
            <Icon>add</Icon>
          </Button>
        </div>
        <Dialog
          open={showAddEventForm}
          onClose={onHideAddEventForm}
          fullScreen={true}
        >
          <DialogContent>
            <AddEventForm onFormSubmitted={onHideAddEventForm} />
          </DialogContent>
        </Dialog>
      </DrawerNavigator>
    );
  }
);
