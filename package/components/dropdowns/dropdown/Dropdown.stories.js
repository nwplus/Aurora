"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _Dropdown = require("./Dropdown");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Dropdowns/Dropdown",
  component: _Dropdown.Dropdown
};
exports.default = _default;
const outerTextString = 'What does the "nw" in nwPlus stand for?';
const innerTextString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const Primary = () => /*#__PURE__*/React.createElement(_Dropdown.Dropdown, {
  outerText: outerTextString,
  innerText: innerTextString,
  width: 600
});
exports.Primary = Primary;