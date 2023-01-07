"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Calendar = void 0;
var _react = _interopRequireDefault(require("react"));
var _Calendar = require("./Calendar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Faq/Calendar",
  component: _Calendar.CalendarComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: {
      description: 'is component active',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_Calendar.CalendarComponent, args);
const Calendar = Template.bind({});
exports.Calendar = Calendar;
Calendar.args = {
  active: true,
  name: 'Calendar',
  title: "Input Title",
  date: "Input Date",
  description: "Input Description"
};