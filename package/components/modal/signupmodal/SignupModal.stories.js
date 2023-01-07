"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SignupModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _SignupModal = require("./SignupModal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Example/Modal/SignupModal',
  component: _SignupModal.SignupModalContainer,
  argTypes: {
    onSubscribeClick: {
      description: 'onClick event when clicking the Subscribe button on the modal'
    },
    onCloseClick: {
      description: 'onClick event when clicking the close button on the modal'
    }
  }
};
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_SignupModal.SignupModalContainer, args);
const SignupModal = Template.bind({});
exports.SignupModal = SignupModal;
SignupModal.args = {
  onSubscribeClick: () => {},
  onCloseClick: () => {}
};