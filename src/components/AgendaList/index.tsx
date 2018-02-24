import * as React from 'react';
import { connect } from 'react-redux';

import { IStore, ICalendarEvent } from '../../constants/types';
import { selectEvents } from '../../reducers';

import { AgendaListView } from './view';

interface IProps {
  events: ICalendarEvent[];
}

class AgendaListContainer extends React.Component<IProps> {
  render() {
    return <AgendaListView events={this.props.events} />;
  }
}

const mapStateToProps = (state: IStore) => ({
  events: selectEvents(state)
});

export const AgendaList = connect(mapStateToProps)(AgendaListContainer);
