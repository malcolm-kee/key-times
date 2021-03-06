import * as React from 'react';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles, Theme } from 'material-ui/styles';

import { Header } from '../Header';

const decorate = withStyles((theme: Theme) => {
  const root: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  };
  const content: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    overflowY: 'scroll'
  };
  const headerRight: React.CSSProperties = {
    display: 'flex'
  };
  const headerRightAction: React.CSSProperties = {
    marginLeft: theme.spacing.unit
  };

  return {
    root,
    content,
    headerRight,
    headerRightAction
  };
});

interface IProps {
  navTitle: string;
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const DrawerNavigatorView = decorate<IProps>(
  ({ navTitle, children, open, openDrawer, closeDrawer, classes }) => (
    <div className={classes.root}>
      <Header title={navTitle} onButtonClick={openDrawer} />
      <div className={classes.content}>{children}</div>
      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <div>
          <List>
            <ListItem button={true} divider={true}>
              <ListItemText primary="Agenda" />
            </ListItem>
            <ListItem button={true} divider={true}>
              <ListItemText primary="Note" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
);

DrawerNavigatorView.defaultProps = {
  navTitle: ''
};
