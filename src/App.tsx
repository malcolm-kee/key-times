import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './config/configureStore';

import { AgendaList } from './components/AgendaList';
import { AuthListener } from './components/AuthListener';
import { DBChangeListener } from './components/DBChangeListener';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AgendaList />
          <AuthListener />
          <DBChangeListener />
        </div>
      </Provider>
    );
  }
}

export default App;
