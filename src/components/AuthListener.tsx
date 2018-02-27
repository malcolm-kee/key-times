import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { loginSuccess, logoutSuccess } from '../actions';
import { subscribeToAuthChange } from '../services/auth';
import { IStore, IUser } from '../constants/types';

interface IProps {
  onLogin: (user: IUser) => void;
  onLogout: () => void;
}

class AuthListenerContainer extends React.Component<IProps> {
  unsubscribe: () => void;

  componentDidMount() {
    this.unsubscribe = subscribeToAuthChange(this.onAuthChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAuthChange = (user: IUser) => {
    const { onLogin, onLogout } = this.props;
    if (user) {
      console.log('onAuthChange with user and onLogin', user, onLogin);
      onLogin(user);
    } else {
      console.log('onAuthChange without user');
      onLogout();
    }
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IStore>) => ({
  onLogin(user: IUser) {
    dispatch(loginSuccess(user.email, user.name, user.photoUrl));
  },
  onLogout() {
    logoutSuccess();
  }
});

export const AuthListener = connect(null, mapDispatchToProps)(
  AuthListenerContainer
);
