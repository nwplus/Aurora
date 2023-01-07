"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Transparent = exports.Light = exports.Dark = void 0;
var _InputMobile = require("./InputMobile");
var _default = {
  title: "Example/Input/InputMobile",
  component: _InputMobile.InputMobile
};
exports.default = _default;
const Template = args => /*#__PURE__*/React.createElement(_InputMobile.InputMobile, args);
const Light = Template.bind({});
exports.Light = Light;
Light.args = {
  width: 600,
  variant: "light",
  placeholder: "This is a placeholder"
};
const Dark = Template.bind({});
exports.Dark = Dark;
Dark.args = {
  width: 600,
  variant: "dark",
  placeholder: "This is a placeholder"
};
const Transparent = Template.bind({});
exports.Transparent = Transparent;
Transparent.args = {
  width: 600,
  variant: "transparent",
  placeholder: "This is a placeholder"
};