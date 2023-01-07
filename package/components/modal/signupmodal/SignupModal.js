"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupModalContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _SignupModalCSS = require("./SignupModalCSS");
var _logoTransparent = _interopRequireDefault(require("../../../assets/logos/logo-transparent.svg"));
var _greyClose = _interopRequireDefault(require("../../../assets/icons/functional/grey-close.svg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SignupModalComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.SignupModalCSS);
const HeaderText = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.HeaderTextCSS);
const BodyText = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.BodyTextCSS);
const LogoImage = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.LogoCSS);
const CloseIcon = _styledComponents.default.img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.CloseCSS);
const InputContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.InputContainerCSS);
const Input = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.InputCSS);
const SubscribeButton = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), _SignupModalCSS.SubscribeButtonCSS);
const SignupModalContainer = _ref => {
  let {
    onSubscribeClick,
    onCloseClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(SignupModalComponent, null, /*#__PURE__*/_react.default.createElement(LogoImage, {
    src: _logoTransparent.default
  }), /*#__PURE__*/_react.default.createElement(CloseIcon, {
    onClick: onCloseClick,
    src: _greyClose.default
  }), /*#__PURE__*/_react.default.createElement(HeaderText, null, "nwPlus Newsletter Sign-up"), /*#__PURE__*/_react.default.createElement(BodyText, null, "Subscribe to our newsletter to stay up to date and for upcoming events!"), /*#__PURE__*/_react.default.createElement(InputContainer, null, /*#__PURE__*/_react.default.createElement(Input, {
    placeholder: "hacker@nwplus.io"
  }), /*#__PURE__*/_react.default.createElement(SubscribeButton, {
    onClick: onSubscribeClick
  }, "Subscribe")));
};
exports.SignupModalContainer = SignupModalContainer;