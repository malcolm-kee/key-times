import { loginSuccess, logoutSuccess } from '../actions';
import { authReducer } from './authReducer';
import { EAuthState } from '../constants/enum';
import { IAuthStore } from '../constants/types';

describe('authReducer', () => {
  const user = {
    email: 'malcolm.keeweesiong@gmail.com',
    name: 'Malcolm',
    photoURL: 'google.com/images/1298afh'
  };

  test('loginSuccess', () => {
    const initialState: IAuthStore = {
      status: EAuthState.ANONYMOUS,
      userName: null,
      userEmail: null,
      userPhotoUrl: null,
      errorMessage: null
    };

    const finalState: IAuthStore = {
      status: EAuthState.LOGGED_IN,
      userName: user.name,
      userEmail: user.email,
      userPhotoUrl: user.photoURL,
      errorMessage: null
    };

    expect(
      authReducer(
        initialState,
        loginSuccess(user.email, user.name, user.photoURL)
      )
    ).toEqual(finalState);
  });

  test('logout', () => {
    const initialState: IAuthStore = {
      status: EAuthState.LOGGED_IN,
      userName: user.name,
      userEmail: user.email,
      userPhotoUrl: user.photoURL,
      errorMessage: null
    };

    const finalState: IAuthStore = {
      status: EAuthState.ANONYMOUS,
      userName: null,
      userEmail: null,
      userPhotoUrl: null,
      errorMessage: null
    };

    expect(authReducer(initialState, logoutSuccess())).toEqual(finalState);
  });
});
