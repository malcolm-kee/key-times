import * as React from 'react';
import { FormikProps } from 'formik';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

interface IFormValues {
  title: string;
  startDate: string;
  startTime: string;
  endTime: string;
}

interface IProps {}

export const AddEventFormView: React.SFC<
  IProps & FormikProps<IFormValues>
> = props => {
  const { values, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="addEventForm--title">Title</InputLabel>
        <Input
          type="text"
          name="title"
          id="addEventForm--title"
          autoFocus={true}
          value={values.title}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="addEventForm--startDate">Date</InputLabel>
        <Input
          type="date"
          name="startDate"
          id="addEventForm--startDate"
          value={values.startDate}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="addEventForm--startTime">Starts</InputLabel>
        <Input
          type="time"
          name="startTime"
          id="addEventForm--startTime"
          value={values.startTime}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="addEventForm--endTime">Ends</InputLabel>
        <Input
          type="time"
          name="endTime"
          id="addEventForm--endTime"
          value={values.endTime}
          onChange={handleChange}
        />
      </FormControl>
      <Button color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};
