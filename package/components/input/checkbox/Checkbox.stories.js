"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SimpleCheckbox = exports.ControlLabel = exports.Control = void 0;
var _react = _interopRequireDefault(require("react"));
var _CheckboxComponent = require("./CheckboxComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Input/Checkbox",
  component: _CheckboxComponent.CheckboxComponent
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_CheckboxComponent.CheckboxComponent, args);
const SimpleCheckbox = Template.bind({});
exports.SimpleCheckbox = SimpleCheckbox;
SimpleCheckbox.args = {
  label: "",
  checked: false
};
const Control = Template.bind({});
exports.Control = Control;
Control.args = {
  variant: "control",
  checked: false,
  disabled: false,
  onClick: () => {}
};
const ControlLabel = Template.bind({});
exports.ControlLabel = ControlLabel;
ControlLabel.args = {
  variant: "control",
  checked: false,
  disabled: false,
  label: "Label",
  onClick: () => {}
};