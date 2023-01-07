"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimarySelect = void 0;
var _DropdownComplexSearch = require("./DropdownComplexSearch");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Dropdowns/DropdownComplexSearch",
  component: _DropdownComplexSearch.DropdownComplexSearchComponent
};
exports.default = _default;
const Template = args => /*#__PURE__*/React.createElement(_DropdownComplexSearch.DropdownComplexSearchComponent, args);
const sampleOptions = ["University of British Columbia, Vancouver", "University of California Berkley", "University of California Los Angeles", "University of New South Wales, Sydney", "University of Washington"];
const PrimarySelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.PrimarySelect = PrimarySelect;
PrimarySelect.args = {
  placeholder: "Enter your school",
  options: sampleOptions,
  error: false
};