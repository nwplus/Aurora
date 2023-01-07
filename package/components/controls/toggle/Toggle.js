"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../../colors");
var _ToggleCSS = require("./ToggleCSS");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Toggle = _ref => {
  let {
    toggleOn,
    onChange
  } = _ref;
  const [checked, setChecked] = (0, _react.useState)(toggleOn);
  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  const Label = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _ToggleCSS.LabelCSS);
  const Switch = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n  "])), _ToggleCSS.SwitchCSS);
  const ToggleStyles = () => {
    if (checked) return " + ".concat(Switch, " {\n      background: ").concat(_colors.colors.gradientMain, ";\n\n      &:before {\n        transform: translate(26px, -50%);\n      }");
  };
  const Input = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _ToggleCSS.InputCSS, () => ToggleStyles());
  return /*#__PURE__*/_react.default.createElement(Label, null, /*#__PURE__*/_react.default.createElement(Input, {
    type: "checkbox",
    checked: checked,
    onChange: () => handleChange(checked)
  }), /*#__PURE__*/_react.default.createElement(Switch, null), /*#__PURE__*/_react.default.createElement("span", null, "Notifications"));
};
exports.Toggle = Toggle;