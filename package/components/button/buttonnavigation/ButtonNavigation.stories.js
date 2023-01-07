"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonNav = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonNavigation = require("./ButtonNavigation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Button/ButtonNavigation",
  component: _ButtonNavigation.ButtonNavigation,
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
const Template = args => /*#__PURE__*/_react.default.createElement(_ButtonNavigation.ButtonNavigation, args);
const ButtonNav = Template.bind({});
exports.ButtonNav = ButtonNav;
ButtonNav.args = {
  //variant: 'navigation',
  active: true,
  label: 'Button',
  name: 'ButtonNavigation'
};