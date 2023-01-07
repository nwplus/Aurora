"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Example/Header',
  component: _Header.Header
};
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_Header.Header, args);
const LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = {
  user: {}
};
const LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = {};