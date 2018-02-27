import * as React from 'react';
import { connect } from 'react-redux';

import { signInGoogle } from '../../services/auth';

import { DrawerNavigatorView } from './view';
import { IStore, IAuthStore } from '../../constants/types';

interface IProps {
  navTitle: string;
  authState: IAuthStore;
}

interface IState {
  drawerOpen: boolean;
}

class DrawerNavigatorContainer extends React.Component<IProps, IState> {
  static defaultProps = {
    navTitle: ''
  };

  state = {
    drawerOpen: false
  };

  handleOpenDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  handleCloseDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  handleLoginClick = () => {
    signInGoogle();
  };

  render() {
    return (
      <DrawerNavigatorView
        open={this.state.drawerOpen}
        openDrawer={this.handleOpenDrawer}
        closeDrawer={this.handleCloseDrawer}
        onLoginClick={this.handleLoginClick}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  authState: state.auth
});

export const DrawerNavigator = connect(mapStateToProps)(
  DrawerNavigatorContainer
);
