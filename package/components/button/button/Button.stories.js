"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Outline = exports.Large = exports.Destructive = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Button/Button',
  component: _Button.Button,
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
const Template = args => /*#__PURE__*/_react.default.createElement(_Button.Button, args);
const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = Primary;
Primary.args = {
  variant: 'primary',
  active: true,
  label: 'Button',
  name: 'Primary',
  size: 'small'
};
const Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  variant: 'secondary',
  active: true,
  label: 'Button',
  name: 'Secondary',
  size: 'small'
};
const Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button',
  name: 'Large',
  variant: 'secondary',
  active: true
};
const Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button',
  name: 'Small',
  variant: 'secondary',
  active: true
};
const Outline = Template.bind({});
exports.Outline = Outline;
Outline.args = {
  variant: 'outline',
  active: true,
  size: 'large',
  label: 'Button',
  name: 'Outline'
};
const Destructive = Template.bind({});
exports.Destructive = Destructive;
Destructive.args = {
  variant: 'destructive',
  active: true,
  size: 'large',
  label: 'Button',
  name: 'Destructive'
};