"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyPageContainer = exports.TypographyContainer = exports.BodyContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TypographyPageContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1.6fr 1.1fr 1fr 0.8fr 0.9fr;\n  font-family: 'HK Grotesk', sans-serif;\n"])));
exports.TypographyPageContainer = TypographyPageContainer;
const TypographyContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 0px 30px 0px 0px;\n  vertical-align: text-top;\n"])));
exports.TypographyContainer = TypographyContainer;
const BodyContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12rem;\n"])));
exports.BodyContainer = BodyContainer;