import { IAction, IKeyList, IStore, IEvent } from '../constants/types';
import { EActionKey } from '../constants/enum';

const DEFAULT_STATE: IStore = {
  data: {}
};

export const rootReducer = (
  state: IStore = DEFAULT_STATE,
  // tslint:disable-next-line:no-any
  action: IAction
): IStore => {
  switch (action.type) {
    case EActionKey.SET_EVENTS:
      return {
        ...state,
        data: action.payload.data.reduce(
          (acc: IKeyList<IEvent>, event: IEvent) => {
            return {
              ...acc,
              [event.id]: event
            };
          },
          {}
        )
      };

    case EActionKey.ADD_EVENT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      };

    default:
      return state;
  }
};
