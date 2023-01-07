"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Secondary = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonText = require("./ButtonText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Button/ButtonText",
  component: _ButtonText.ButtonText,
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
const Template = args => /*#__PURE__*/_react.default.createElement(_ButtonText.ButtonText, args);
const Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  variant: "primary",
  active: true,
  label: 'Button',
  name: 'Primary'
};
const Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  variant: "secondary",
  active: true,
  label: 'Button',
  name: 'Secondary'
};