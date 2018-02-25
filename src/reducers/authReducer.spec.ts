import { loginSuccess, logoutSuccess } from '../actions';
import { authReducer } from './authReducer';
import { EAuthState } from '../constants/enum';
import { IAuthStore } from '../constants/types';

describe('authReducer', () => {
  const user = {
    email: 'malcolm.keeweesiong@gmail.com',
    name: 'Malcolm',
    photoUrl: 'google.com/images/1298afh'
  };

  test('loginSuccess', () => {
    const initialState: IAuthStore = {
      status: EAuthState.ANONYMOUS,
      user: null,
      errorMessage: null
    };

    const finalState: IAuthStore = {
      status: EAuthState.LOGGED_IN,
      errorMessage: null,
      user
    };

    expect(
      authReducer(
        initialState,
        loginSuccess(user.email, user.name, user.photoUrl)
      )
    ).toEqual(finalState);
  });

  test('logout', () => {
    const initialState: IAuthStore = {
      status: EAuthState.LOGGED_IN,
      errorMessage: null,
      user
    };

    const finalState: IAuthStore = {
      status: EAuthState.ANONYMOUS,
      user: null,
      errorMessage: null
    };

    expect(authReducer(initialState, logoutSuccess())).toEqual(finalState);
  });
});
