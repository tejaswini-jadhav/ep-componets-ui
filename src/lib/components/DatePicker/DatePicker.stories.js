/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import DatePicker from './DatePicker';

export default {
  title: 'Date Picker',
  component: DatePicker,
};
const TWENTY_EIGHTH_AUGUST = moment('2021-08-28');
// eslint-disable-next-line react/prop-types
const Template = ({
  defaultStoryBookSelectedDate = TWENTY_EIGHTH_AUGUST,
  ...args
}) => {
  const [selectedDate, setSelectedDate] = useState(
    defaultStoryBookSelectedDate,
  );
  return (
    <DatePicker
      {...args}
      selectedDate={selectedDate}
      handleSelectedDate={date => setSelectedDate(date)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  startDate: moment('2021-08-28'),
  endDate: moment('2021-09-5'),
};

export const noDateSelected = Template.bind({});

noDateSelected.args = {
  startDate: undefined,
  endDate: null,
  defaultStoryBookSelectedDate: null,
};
