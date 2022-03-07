"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noDateSelected = exports.default = exports.Default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

const _excluded = ["defaultStoryBookSelectedDate"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: 'Date Picker',
  component: _DatePicker.default
};
exports.default = _default;
const TWENTY_EIGHTH_AUGUST = (0, _moment.default)('2021-08-28'); // eslint-disable-next-line react/prop-types

const Template = _ref => {
  let {
    defaultStoryBookSelectedDate = TWENTY_EIGHTH_AUGUST
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [selectedDate, setSelectedDate] = (0, _react.useState)(defaultStoryBookSelectedDate);
  return /*#__PURE__*/_react.default.createElement(_DatePicker.default, _extends({}, args, {
    selectedDate: selectedDate,
    handleSelectedDate: date => setSelectedDate(date)
  }));
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  startDate: (0, _moment.default)('2021-08-28'),
  endDate: (0, _moment.default)('2021-09-5')
};
const noDateSelected = Template.bind({});
exports.noDateSelected = noDateSelected;
noDateSelected.args = {
  startDate: undefined,
  endDate: null,
  defaultStoryBookSelectedDate: null
};