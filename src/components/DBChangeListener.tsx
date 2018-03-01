import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { restoreEvents } from '../actions';
import { subscribe } from '../services/events';
import { IEvent, IStore } from '../constants/types';

interface IProps {
  dispatchRestoreEvents: (events: IEvent[]) => void;
}

class DBChangeListenerContainer extends React.Component<IProps> {
  componentDidMount() {
    subscribe(this.onEventDocChange);
  }

  onEventDocChange = (events: IEvent[]) => {
    console.log('onEventDocChange in Listener', events);
    this.props.dispatchRestoreEvents(events);
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IStore>) => ({
  dispatchRestoreEvents(events: IEvent[]) {
    dispatch(restoreEvents(events));
  }
});

export const DBChangeListener = connect(null, mapDispatchToProps)(
  DBChangeListenerContainer
);
