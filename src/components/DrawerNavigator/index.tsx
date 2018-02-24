import * as React from 'react';

import { DrawerNavigatorView } from './view';

interface IProps {
  navTitle: string;
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

  render() {
    return (
      <DrawerNavigatorView
        open={this.state.drawerOpen}
        openDrawer={this.handleOpenDrawer}
        closeDrawer={this.handleCloseDrawer}
        {...this.props}
      />
    );
  }
}

export const DrawerNavigator = DrawerNavigatorContainer;
