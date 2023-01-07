"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProgressBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProgressBar = require("./ProgressBar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Example/Indicators/ProgressBar',
  component: _ProgressBar.ProgressBarContainer,
  argTypes: {
    progressPercent: {
      description: 'number representing percentage value the bar should be set at',
      control: {
        type: 'number'
      }
    }
  }
};
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_ProgressBar.ProgressBarContainer, args);
const ProgressBar = Template.bind({});
exports.ProgressBar = ProgressBar;
ProgressBar.args = {
  progressPercent: 50
};