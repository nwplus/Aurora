"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NotificationToggle = void 0;
var _react = _interopRequireDefault(require("react"));
var _Toggle = require("./Toggle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/SelectControls/Toggle",
  component: _Toggle.Toggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    toggleOn: {
      description: "is component on",
      options: [true, false],
      control: {
        type: "boolean"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_Toggle.Toggle, args);
const NotificationToggle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.NotificationToggle = NotificationToggle;
NotificationToggle.args = {
  toggleOn: false
};