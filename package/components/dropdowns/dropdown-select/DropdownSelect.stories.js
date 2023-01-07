"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimarySelect = void 0;
var _DropdownSelect = require("./DropdownSelect");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Dropdowns/DropdownSelect",
  component: _DropdownSelect.DropdownSelectComponent
};
exports.default = _default;
const Template = args => /*#__PURE__*/React.createElement(_DropdownSelect.DropdownSelectComponent, args);
const sampleOptions = ["High school", "Undergraduate", "Graduate or Post-Graduate", "Other"];
const PrimarySelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.PrimarySelect = PrimarySelect;
PrimarySelect.args = {
  placeholder: "Level of Education",
  options: sampleOptions,
  error: false
};