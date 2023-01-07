"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonText = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = require("../../colors/index");
var _ButtonTextCSS = require("./ButtonTextCSS");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// ButtonText
const ButtonText = _ref => {
  let {
    active,
    variant,
    label,
    onClick
  } = _ref;
  const getVariantStyles = p => {
    const inactiveText = "color: ".concat(_index.colors.grey600, "; cursor: default");
    let styles = "";
    switch (p.variant) {
      case "primary":
        styles += p.active ? "".concat(_ButtonTextCSS.PrimaryButtonTextCSS) : inactiveText;
        break;
      case "secondary":
        styles += p.active ? "".concat(_ButtonTextCSS.SecondaryButtonTextCSS) : inactiveText;
        break;
      default:
        break;
    }
    return styles;
  };
  const ButtonText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _ButtonTextCSS.ButtonTextCSS, p => getVariantStyles(p));
  return /*#__PURE__*/_react.default.createElement(ButtonText, {
    active: active,
    variant: variant,
    onClick: onClick
  }, label);
};
exports.ButtonText = ButtonText;