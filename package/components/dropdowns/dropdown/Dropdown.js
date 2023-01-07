"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _DropdownCSS = require("./DropdownCSS");
var _icons = require("../../../assets/icons");
var _index = require("../../colors/index");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const DropdownInner = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _DropdownCSS.dropdownInnerCSS);
const DropdownArrow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  margin-top: ", ";\n"])), _DropdownCSS.dropdownArrowCSS, p => p.open ? "-2px" : "");
const Image = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  filter: invert(1) sepia(1) saturate(5) hue-rotate(15deg);\n"])));
const Dropdown = _ref => {
  let {
    outerText,
    innerText,
    width
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const ToggleStyles = () => {
    if (open) {
      return "{background: ".concat(_index.colors.gradientMainVertical, ";}");
    } else {
      return "{ background: ".concat(_index.colors.white, "; }");
    }
  };
  const DropdownWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _DropdownCSS.dropdownWrapperCSS, () => "{ width: ".concat(width, "px }"));
  const DropdownOuter = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _DropdownCSS.dropdownOuterCSS, ToggleStyles());
  return /*#__PURE__*/_react.default.createElement(DropdownWrapper, null, /*#__PURE__*/_react.default.createElement(DropdownOuter, {
    onClick: toggleDropdown
  }, outerText, /*#__PURE__*/_react.default.createElement(DropdownArrow, {
    open: open
  }, open ? /*#__PURE__*/_react.default.createElement(Image, {
    src: _icons.ChevronUp,
    alt: "Chevron up"
  }) : /*#__PURE__*/_react.default.createElement(Image, {
    src: _icons.ChevronDown,
    alt: "Chevron down"
  }))), open && /*#__PURE__*/_react.default.createElement(DropdownInner, {
    className: "toggle"
  }, innerText));
};
exports.Dropdown = Dropdown;