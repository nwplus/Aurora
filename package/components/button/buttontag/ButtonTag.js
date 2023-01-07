"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTag = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = require("../../colors/index");
var _ButtonTagCSS = require("./ButtonTagCSS");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// ButtonTag
const ButtonTag = _ref => {
  let {
    label,
    disabled,
    onClick
  } = _ref;
  const ButtonTag = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    \n    ", "\n  "])), _ButtonTagCSS.ButtonTagCSS, _ButtonTagCSS.ActiveCSS, !disabled && "\n        &:hover {\n          ".concat(_ButtonTagCSS.HoverCSS, "\n        }\n        &:hover > div {\n          border: 2px solid ").concat(_index.colors.emerald400, ";\n        }\n        &:focus {\n          ").concat(_ButtonTagCSS.FocusCSS, "\n        }\n        &:focus > div {\n          border: 2px solid ").concat(_index.colors.emerald400, ";\n          background: ").concat(_index.colors.midnight600, ";\n      }"), disabled ? _ButtonTagCSS.InactiveCSS : "");
  const Circle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: -10px;\n    height: 20px;\n    width: 20px;\n    border: 2px solid white;\n    ", "\n    ", "\n    border-radius: 20px;\n    transition: all 0.13s linear;\n  "])), !disabled && "&:hover {\n          border: 2px solid ".concat(_index.colors.emerald400, ";\n        }\n        &:focus {\n          border: 2px solid ").concat(_index.colors.midnight400, ";\n        }"), disabled ? "border: 2px solid ".concat(_index.colors.grey500, ";") : "");
  const TextContainer = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    line-height: 24px;\n    margin-left: 32px;\n    margin-right: 8px;\n  "])));
  const Container = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: inline-block;\n  "])));
  return /*#__PURE__*/_react.default.createElement(Container, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(ButtonTag, null, /*#__PURE__*/_react.default.createElement(Circle, null), /*#__PURE__*/_react.default.createElement(TextContainer, null, label)));
};
exports.ButtonTag = ButtonTag;