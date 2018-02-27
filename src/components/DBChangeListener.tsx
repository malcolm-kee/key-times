import * as React from 'react';

import { subscribe } from '../services/events';
import { IEvent } from '../constants/types';

interface IProps {}

class DBChangeListenerContainer extends React.Component<IProps> {
  componentDidMount() {
    subscribe(this.onEventDocChange);
  }

  onEventDocChange = (events: IEvent[]) => {
    console.log('onEventDocChange in Listener', events);
  };

  render() {
    return null;
  }
}

export const DBChangeListener = DBChangeListenerContainer;
