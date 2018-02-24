import * as React from 'react';
import { connect } from 'react-redux';

import { IStore, ICalendarEvent } from '../../constants/types';
import { selectEvents } from '../../reducers';

import { AgendaListView } from './view';

interface IProps {
  events: ICalendarEvent[];
}

interface IState {
  showAddEventForm: boolean;
}

class AgendaListContainer extends React.Component<IProps, IState> {
  state: IState = {
    showAddEventForm: false
  };

  handleShowAddEventForm = () => {
    this.setState({
      showAddEventForm: true
    });
  };

  handleHideAddEventForm = () => {
    this.setState({
      showAddEventForm: false
    });
  };

  render() {
    return (
      <AgendaListView
        events={this.props.events}
        showAddEventForm={this.state.showAddEventForm}
        onShowAddEventForm={this.handleShowAddEventForm}
        onHideAddEventForm={this.handleHideAddEventForm}
      />
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  events: selectEvents(state)
});

export const AgendaList = connect(mapStateToProps)(AgendaListContainer);
