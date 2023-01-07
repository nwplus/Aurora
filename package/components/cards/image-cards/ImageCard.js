"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCardComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Colors = require("../../colors/Colors");
var _ImageCardButton = _interopRequireDefault(require("./ImageCardButton"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const BackgroundImageContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 47.69%,\n      rgba(0, 0, 0, 0.8) 100%\n    ),\n    url(", ") center/cover;\n  background: ", ";\n"])), p => p.imageLink, p => !p.active && "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 47.69%, rgba(0, 0, 0, 0.8) 82.29%), url(".concat(p.imageLink, ") center/cover"));
const CardContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 450px;\n  height: 500px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin: 2em;\n  position: relative;\n\n  &:hover > ", " {\n    background: url(", ") cover;\n    transform: scale(1.1);\n    transition: 300ms;\n  }\n"])), BackgroundImageContainer, p => p.imageLink);
const OverlayContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"])));
const OverLayFooterContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n  align-items: center;\n  padding: 1em 2.5em;\n"])));
const EventDataContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 1.2em;\n  font-family: \"HK Grotesk\", sans-serif;\n  font-weight: 700;\n"])));
const getTextColor = p => {
  if (p.active) {
    return "\n      background: -webkit-linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    ";
  } else {
    return "\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: white;\n    ";
  }
};
const EventRegistrationStatus = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), p => getTextColor(p));
const EventDateString = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), _Colors.colors.grey500);
const ImageCardComponent = _ref => {
  let {
    active,
    link,
    date,
    imageLink
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(CardContainer, {
    imageLink: imageLink
  }, /*#__PURE__*/_react.default.createElement(OverlayContainer, null, /*#__PURE__*/_react.default.createElement(OverLayFooterContainer, null, /*#__PURE__*/_react.default.createElement(EventDataContainer, null, /*#__PURE__*/_react.default.createElement(EventRegistrationStatus, {
    active: active
  }, "Registration ".concat(active ? "Open" : "Closed")), /*#__PURE__*/_react.default.createElement(EventDateString, null, date)), /*#__PURE__*/_react.default.createElement(_ImageCardButton.default, {
    height: "3em",
    link: link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Visit Site"))), /*#__PURE__*/_react.default.createElement(BackgroundImageContainer, {
    imageLink: imageLink,
    active: active
  }));
};
exports.ImageCardComponent = ImageCardComponent;