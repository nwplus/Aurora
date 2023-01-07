"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ControlNumber = void 0;
var _react = _interopRequireDefault(require("react"));
var _Number = require("./Number");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/SelectControls/Number",
  component: _Number.Number,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isSelected: {
      description: "is component selected",
      options: [true, false],
      control: {
        type: "boolean"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_Number.Number, args);
const ControlNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ControlNumber = ControlNumber;
ControlNumber.args = {
  isSelected: false,
  number: 1
};