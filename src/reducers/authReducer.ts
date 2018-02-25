import { EAuthState, EActionKey } from '../constants/enum';
import { IAuthStore, IAction, IUser } from '../constants/types';

const DEFAULT_STATE: IAuthStore = {
  status: EAuthState.ANONYMOUS,
  errorMessage: null,
  user: null
};

export const authReducer = (
  state: IAuthStore = DEFAULT_STATE,
  action: IAction<IUser>
): IAuthStore => {
  switch (action.type) {
    case EActionKey.LOGIN_SUCCESS:
      return {
        ...state,
        status: EAuthState.LOGGED_IN,
        user: action.payload
      };

    case EActionKey.LOGOUT_SUCCESS:
      return {
        ...state,
        status: EAuthState.ANONYMOUS,
        user: null
      };

    default:
      return state;
  }
};
