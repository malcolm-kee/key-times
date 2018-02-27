import * as React from 'react';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles, Theme } from 'material-ui/styles';

import { EAuthState } from '../../constants/enum';
import { IAuthStore } from '../../constants/types';
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
  authState: IAuthStore;
  onLoginClick: () => void;
}

export const DrawerNavigatorView = decorate<IProps>(
  ({
    navTitle,
    children,
    open,
    openDrawer,
    closeDrawer,
    authState,
    onLoginClick,
    classes
  }) => (
    <div className={classes.root}>
      <Header
        title={navTitle}
        onButtonClick={openDrawer}
        renderRightSection={() => {
          const photoUrl =
            authState.user && authState.user.photoUrl !== null
              ? authState.user.photoUrl
              : undefined;
          return authState.status === EAuthState.ANONYMOUS ? (
            <Button onClick={onLoginClick} color="inherit">
              Login
            </Button>
          ) : (
            <Avatar src={photoUrl} />
          );
        }}
      />
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
