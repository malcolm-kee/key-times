import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Formik, FormikProps } from 'formik';

import { addEvent } from '../../actions';
import { getDefaultHTMLPeriod } from '../../utils/date';
import { AddEventFormView } from './view';

interface IFormValues {
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

const defaultValues = getDefaultHTMLPeriod();

interface IProps {
  dispatchAddEvent: (title: string, startDate: string, endDate: string) => void;
  onFormSubmitted?: () => void;
}

class AddEventFormContainer extends React.Component<IProps> {
  render() {
    return (
      <Formik
        initialValues={{
          title: '',
          startDate: defaultValues.startDate,
          startTime: defaultValues.startTime,
          endDate: defaultValues.endDate,
          endTime: defaultValues.endTime
        }}
        onSubmit={(values: IFormValues) => {
          const { dispatchAddEvent, onFormSubmitted } = this.props;

          const startDate = new Date(
            `${values.startDate} ${values.startTime}`
          ).toISOString();
          const endDate = new Date(
            `${values.startDate} ${values.endTime}`
          ).toISOString();
          const title = values.title;
          dispatchAddEvent(title, startDate, endDate);
          if (onFormSubmitted) {
            onFormSubmitted();
          }
        }}
        render={(props: FormikProps<IFormValues>) => {
          return <AddEventFormView {...props} />;
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  dispatchAddEvent(title: string, startDate: string, endDate: string) {
    dispatch(addEvent(title, startDate, endDate));
  }
});

export const AddEventForm = connect(null, mapDispatchToProps)(
  AddEventFormContainer
);
