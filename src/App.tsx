import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './config/configureStore';

import { AgendaList } from './components/AgendaList';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AgendaList />
        </div>
      </Provider>
    );
  }
}

export default App;
