import { EAuthState, EActionKey } from '../constants/enum';
import { IAuthStore, IAction } from '../constants/types';

const DEFAULT_STATE: IAuthStore = {
  status: EAuthState.ANONYMOUS,
  userName: null,
  userEmail: null,
  userPhotoUrl: null,
  errorMessage: null
};

export const authReducer = (
  state: IAuthStore = DEFAULT_STATE,
  action: IAction
): IAuthStore => {
  switch (action.type) {
    case EActionKey.LOGIN_SUCCESS:
      return {
        ...state,
        status: EAuthState.LOGGED_IN,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userPhotoUrl: action.payload.userPhotoUrl
      };

    case EActionKey.LOGOUT_SUCCESS:
      return {
        ...state,
        status: EAuthState.ANONYMOUS,
        userName: null,
        userEmail: null,
        userPhotoUrl: null
      };

    default:
      return state;
  }
};
