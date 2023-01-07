"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowContainer = exports.IconsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../colors");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const IconsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: \"HK Grotesk\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  color: ", ";\n  display: grid;\n"])), _colors.colors.emerald400);
exports.IconsContainer = IconsContainer;
const RowContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline;\n\n  img {\n    padding: 10px;\n  }\n"])));
exports.RowContainer = RowContainer;