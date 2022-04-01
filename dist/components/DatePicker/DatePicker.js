"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _DatePickerModule = _interopRequireDefault(require("./DatePicker.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMonthForStartDate = startDate => {
  var _startDate$format;

  return (startDate === null || startDate === void 0 ? void 0 : (_startDate$format = startDate.format) === null || _startDate$format === void 0 ? void 0 : _startDate$format.call(startDate, 'MMMM')) || ' - - ';
};

const getDatesForRange = (startDate, endDate) => {
  const startDateCopy = (0, _moment.default)(startDate, 'YYYY-MM-DD');
  const endDateCopy = (0, _moment.default)(endDate, 'YYYY-MM-DD');
  const dates = [];

  while (startDateCopy.isSameOrBefore(endDateCopy, 'day')) {
    dates.push((0, _moment.default)(startDateCopy));
    startDateCopy.add(1, 'days');
  }

  return dates;
};

const DatePicker = _ref => {
  let {
    startDate,
    endDate,
    selectedDate,
    handleSelectedDate
  } = _ref;
  if (startDate && endDate && endDate.isBefore(startDate, 'day')) throw new Error('endDate cannot be before startDate');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _DatePickerModule.default.datePickerContainer
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: selectedDate && selectedDate.isSame((0, _moment.default)(0)) ? (0, _clsx.default)(_DatePickerModule.default.previousButton, _DatePickerModule.default.selectedPrevious) : _DatePickerModule.default.previousButton,
    onClick: () => handleSelectedDate((0, _moment.default)(0))
  }, "Previous"), /*#__PURE__*/_react.default.createElement("span", {
    className: _DatePickerModule.default.monthOfSelectedDate,
    id: "month"
  }, selectedDate && !selectedDate.isSame((0, _moment.default)(0)) ? selectedDate.format('MMMM') : getMonthForStartDate(startDate)), startDate && endDate ? getDatesForRange(startDate, endDate).map(date => /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: date.format('DD-MMM'),
    className: date.isSame(selectedDate, 'day') ? (0, _clsx.default)(_DatePickerModule.default.circularButton, _DatePickerModule.default.selectedDate) : _DatePickerModule.default.circularButton,
    onClick: () => handleSelectedDate(date)
  }, date.format('DD'))) : /*#__PURE__*/_react.default.createElement("span", {
    className: _DatePickerModule.default.noDateRangeGiven
  }, " No ASN Available"));
};

DatePicker.propTypes = {
  startDate: _propTypes.default.objectOf(_moment.default),
  endDate: _propTypes.default.objectOf(_moment.default),
  selectedDate: _propTypes.default.objectOf(_moment.default),
  handleSelectedDate: _propTypes.default.func
};
var _default = DatePicker;
exports.default = _default;