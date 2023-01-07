"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNavigation = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Colors = require("../../colors/Colors");
var _ButtonNavigationCSS = require("./ButtonNavigationCSS");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ButtonNavigation = _ref => {
  let {
    active,
    variant,
    label,
    onClick
  } = _ref;
  const getActiveStyles = p => {
    const inactiveText = "color: ".concat(_Colors.colors.grey600, "; pointer-events: none");
    let styles = "";
    if (p.active) {
      styles += "".concat(_ButtonNavigationCSS.ButtonNavigationCSS);
    } else {
      styles += inactiveText;
    }
    return styles;
  };
  const ButtonNavigation = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _ButtonNavigationCSS.ButtonNavigationCSS, p => getActiveStyles(p));
  return /*#__PURE__*/_react.default.createElement(ButtonNavigation, {
    active: active,
    variant: variant,
    onClick: onClick
  }, label);
};
exports.ButtonNavigation = ButtonNavigation;