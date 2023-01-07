"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidePanel = void 0;
var _react = _interopRequireDefault(require("react"));
var _SidePanelCSS = require("./SidePanelCSS");
var _Colors = require("../colors/Colors");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SidePanel = _ref => {
  let {
    active,
    label,
    onClick
  } = _ref;
  const inactive = "color: ".concat(_Colors.colors.grey500, "; pointer-events: none");
  let styles = "";
  if (active) {
    styles += "".concat(_SidePanelCSS.SidePanelCSS);
  } else {
    styles += inactive;
  }
  const SidePanel = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _SidePanelCSS.SidePanelCSS, styles);
  return /*#__PURE__*/_react.default.createElement(SidePanel, {
    onClick: onClick,
    active: styles
  }, label);
};
exports.SidePanel = SidePanel;