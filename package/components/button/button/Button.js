"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = require("../../colors/index");
var _ButtonCSS = require("./ButtonCSS");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Button
const Button = _ref => {
  let {
    active,
    variant,
    size,
    label,
    onClick
  } = _ref;
  const getVariantStyles = p => {
    // Inactive button variant background state (primary, secondary, destructive)
    const inactiveSolid = "background: ".concat(_index.colors.grey500, "; color: ").concat(_index.colors.grey600, "; cursor: default;");

    // Inactive outlined variant background state
    const inactiveOutlined = "background: Transparent; color: ".concat(_index.colors.grey600, "; outline: 2px solid ").concat(_index.colors.grey600, "; padding: 0.7rem 1.5rem;");
    let styles = "";
    switch (p.variant) {
      case "primary":
        styles += p.active ? "".concat(_ButtonCSS.PrimaryCSS, "\n          &::before {\n               content: \"").concat(p.children, "\";\n           }") : inactiveSolid;
        break;
      case "secondary":
        styles += p.active ? "".concat(_ButtonCSS.SecondaryCSS) : inactiveSolid;
        break;
      case "outline":
        styles += p.active ? "".concat(_ButtonCSS.OutlineCSS) : inactiveOutlined;
        break;
      case "destructive":
        styles += active ? "".concat(_ButtonCSS.DestructiveCSS) : inactiveSolid;
        break;
      default:
        break;
    }
    return styles;
  };
  const getSizeStyles = () => {
    let styles = "";
    switch (size) {
      case "large":
        styles += "font-size: 1.5rem; padding: 0.8rem 1.5rem;";
        break;
      // default is small
      default:
        styles += "font-size: 1.125rem; padding: 0.8rem 1.125rem;";
        break;
    }
    return styles;
  };
  const Button = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", " \n    ", "\n  "])), _ButtonCSS.ButtonCSS, p => getVariantStyles(p), () => getSizeStyles());
  return /*#__PURE__*/_react.default.createElement(Button, {
    active: active,
    variant: variant,
    size: size,
    onClick: onClick
  }, label);
};
exports.Button = Button;