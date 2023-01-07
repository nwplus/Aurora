"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PillButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = require("../../colors/index");
var _PillButtonCSS = require("./PillButtonCSS");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const PillButton = _ref => {
  let {
    active,
    variant,
    label,
    onClick
  } = _ref;
  const getVariantStyles = p => {
    const inactiveSolid = "background: ".concat(_index.colors.grey500, "; color: ").concat(_index.colors.grey600, "; cursor: default; border-radius: 100px;");
    let styles = "";
    switch (p.variant) {
      case "primary":
        styles += p.active ? "".concat(_PillButtonCSS.PillPrimaryCSS, "\n               &::before {\n                  content: \"").concat(p.children, "\";\n                }") : inactiveSolid;
        break;
      case "secondary":
        styles += p.active ? "".concat(_PillButtonCSS.PillSecondaryCSS) : inactiveSolid;
        break;
      default:
        break;
    }
    return styles;
  };
  const PillButton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _PillButtonCSS.PillButtonCSS, p => getVariantStyles(p));
  return /*#__PURE__*/_react.default.createElement(PillButton, {
    active: active,
    variant: variant,
    onClick: onClick
  }, label);
};
exports.PillButton = PillButton;