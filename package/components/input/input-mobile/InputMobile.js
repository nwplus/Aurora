"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputMobile = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _InputMobileCSS = require("./InputMobileCSS");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const getVariantStyles = p => {
  let styles = "";
  switch (p.variant) {
    case "light":
      styles += "".concat(_InputMobileCSS.InputMobileLightCSS);
      break;
    case "dark":
      styles += "".concat(_InputMobileCSS.InputMobileDarkCSS);
      break;
    case "transparent":
      styles += "".concat(_InputMobileCSS.InputMobileTransparentCSS);
      break;
    default:
      styles += "".concat(_InputMobileCSS.InputMobileLightCSS);
  }
  return styles;
};
const Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", " \n\t", "\n"])), _InputMobileCSS.InputMobileCSS, p => getVariantStyles(p), p => " { width: ".concat(p.width, "px }"));
const InputMobile = _ref => {
  let {
    width,
    variant,
    placeholder,
    onChange
  } = _ref;
  const [text, setText] = (0, _react.useState)("");
  const changeHandler = e => {
    setText(e.target.value);
    onChange(e);
  };
  return /*#__PURE__*/_react.default.createElement(Input, {
    id: "input-mobile-component",
    placeholder: placeholder,
    value: text,
    width: width,
    variant: variant,
    onChange: changeHandler
  });
};
exports.InputMobile = InputMobile;