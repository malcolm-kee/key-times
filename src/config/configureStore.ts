import { createStore } from 'redux';
import { rootReducer } from '../reducers';

// tslint:disable-next-line:no-string-literal
const enhancer = window['devToolsExtension']
  ? // tslint:disable-next-line:no-string-literal
    window['devToolsExtension']()(createStore)
  : createStore;

export const configureStore = () => {
  const store = enhancer(rootReducer);

  return store;
};
