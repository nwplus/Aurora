"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Timer = void 0;
var _react = _interopRequireDefault(require("react"));
var _Timer = require("./Timer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Indicators/Timer',
  component: _Timer.TimerComponentContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isActive: {
      description: 'is component active',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    },
    time: {
      description: 'time in seconds to display',
      control: {
        type: 'number'
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_Timer.TimerComponentContainer, args);
const Timer = Template.bind({});
exports.Timer = Timer;
Timer.args = {
  isActive: false,
  time: 100
};