"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Colors = require("../../colors/Colors");
const _excluded = ["link"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const StyledButton = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 700;\n  text-decoration: none;\n  font-family: \"HK Grotesk\", sans-serif;\n  border-radius: ", ";\n  background: ", ";\n  width: ", ";\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1em ", ";\n  padding: ", ";\n  border: ", ";\n  color: black;\n"])), p => p.borderRadius ? p.borderRadius : "8px", _Colors.colors.gradientMain, p => p.width ? p.width : "100%", p => p.height, p => p.noMargin ? "0em" : "0.5em", p => p.padding ? p.padding : "0", p => p.hollow && "2px solid ".concat(_Colors.colors.gradientMain));
const Button = _ref => {
  let {
      link
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    href: link
  }, props));
};
var _default = Button;
exports.default = _default;