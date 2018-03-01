import * as React from 'react';
import { Formik, FormikProps } from 'formik';

import { add } from '../../services/events';
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
          const { onFormSubmitted } = this.props;

          const startDate = new Date(
            `${values.startDate} ${values.startTime}`
          ).toISOString();
          const endDate = new Date(
            `${values.startDate} ${values.endTime}`
          ).toISOString();
          const title = values.title;
          add({ title, startDate, endDate });
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

export const AddEventForm = AddEventFormContainer;
