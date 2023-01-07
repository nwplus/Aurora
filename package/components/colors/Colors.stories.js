"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ColorPalette = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Colors = require("./Colors");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ColorPageContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  font: HK Grotesk;\n"])));
const ColorContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: bold;\n  margin: 20px 7px;\n\n\n  ", "\n  ", "\n"])), p => p.white && "color: white", p => p.empty && "border: 1px dotted grey;");

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Color Palette',
  component: _Colors.colors
};
exports.default = _default;
let colorVisual = Array.from(Object.keys(_Colors.colors));
colorVisual.splice(-9, 0, 'empty');
colorVisual.splice(-9, 0, 'empty');
colorVisual.splice(-5, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');
const Template = () => /*#__PURE__*/_react.default.createElement(ColorPageContainer, null, colorVisual.map(colorName => colorName === 'empty' ? /*#__PURE__*/_react.default.createElement(ColorContainer, {
  empty: true
}) : /*#__PURE__*/_react.default.createElement(ColorContainer, {
  style: {
    background: _Colors.colors[colorName]
  },
  white: Number(_Colors.colors[colorName][1]) <= 5
}, colorName)));
const ColorPalette = Template.bind({});
exports.ColorPalette = ColorPalette;