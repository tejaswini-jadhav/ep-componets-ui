import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './DatePicker.module.css';

const getMonthForStartDate = startDate =>
  startDate?.format?.('MMMM') || ' - - ';

const getDatesForRange = (startDate, endDate) => {
  const startDateCopy = moment(startDate, 'YYYY-MM-DD');
  const endDateCopy = moment(endDate, 'YYYY-MM-DD');

  const dates = [];
  while (startDateCopy.isSameOrBefore(endDateCopy, 'day')) {
    dates.push(moment(startDateCopy));
    startDateCopy.add(1, 'days');
  }
  return dates;
};

const DatePicker = ({
  startDate,
  endDate,
  selectedDate,
  handleSelectedDate,
}) => {
  if (startDate && endDate && endDate.isBefore(startDate, 'day'))
    throw new Error('endDate cannot be before startDate');

  return (
    <div className={styles.datePickerContainer}>
      <Button
        className={
          selectedDate && selectedDate.isSame(moment(0))
            ? clsx(styles.previousButton, styles.selectedPrevious)
            : styles.previousButton
        }
        onClick={() => handleSelectedDate(moment(0))}
      >
        Previous
      </Button>
      <span className={styles.monthOfSelectedDate} id="month">
        {selectedDate && !selectedDate.isSame(moment(0))
          ? selectedDate.format('MMMM')
          : getMonthForStartDate(startDate)}
      </span>
      {startDate && endDate ? (
        getDatesForRange(startDate, endDate).map(date => (
          <Button
            key={date.format('DD-MMM')}
            className={
              date.isSame(selectedDate, 'day')
                ? clsx(styles.circularButton, styles.selectedDate)
                : styles.circularButton
            }
            onClick={() => handleSelectedDate(date)}
          >
            {date.format('DD')}
          </Button>
        ))
      ) : (
        <span className={styles.noDateRangeGiven}> No ASN Available</span>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  startDate: PropTypes.objectOf(moment),
  endDate: PropTypes.objectOf(moment),
  selectedDate: PropTypes.objectOf(moment),
  handleSelectedDate: PropTypes.func,
};

export default DatePicker;
