"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Active = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonTag = require("./ButtonTag");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Button/ButtonTag",
  component: _ButtonTag.ButtonTag,
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
const Template = args => /*#__PURE__*/_react.default.createElement(_ButtonTag.ButtonTag, args);
const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Active = Active;
Active.args = {
  disabled: false,
  label: "Developer"
};