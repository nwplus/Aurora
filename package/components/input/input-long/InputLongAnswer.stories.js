"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputLongAnswer = void 0;
var _react = _interopRequireDefault(require("react"));
var _InputLongAnswer = require("./InputLongAnswer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Input",
  component: _InputLongAnswer.InputLongAnswerComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isEmpty: {
      description: 'is component filled with text',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_InputLongAnswer.InputLongAnswerComponent, args);
const InputLongAnswer = Template.bind({});
exports.InputLongAnswer = InputLongAnswer;
InputLongAnswer.args = {
  name: 'Input Long Answer',
  label: 'Input Long Answer',
  isEmpty: true
};