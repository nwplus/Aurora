"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = exports.HeadingMain = exports.HeadingCaption = exports.H4 = exports.H3 = exports.H2 = exports.H1Caption = exports.H1 = exports.FontCaption = exports.BoldFontCaption = exports.BodyTitle = exports.BodyCaption = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const H1 = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 900;\n  font-size: ", ";\n  line-height: 3.5rem;\n  letter-spacing: 0.4px;\n  display: block;\n"])), p => p.size || "3.5rem");
exports.H1 = H1;
const H2 = _styledComponents.default.h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 800;\n  font-size: ", ";\n  line-height: 2.625rem;\n  letter-spacing: 0.38px;\n  display: block;\n"])), p => p.size || "2.625rem");
exports.H2 = H2;
const H3 = _styledComponents.default.h3(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: ", ";\n  line-height: 2rem;\n  display: block;\n"])), p => p.size || "2rem");
exports.H3 = H3;
const H4 = _styledComponents.default.h4(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: ", ";\n  line-height: 26px;\n  display: block;\n"])), p => p.size || "24px");
exports.H4 = H4;
const Paragraph = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  margin: 0;\n  display: block;\n"])));
exports.Paragraph = Paragraph;
const HeadingCaption = _styledComponents.default.h6(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: ", ";\n  line-height: 0.94rem;\n  word-spacing: 8px;\n  display: block;\n"])), p => p.size || "0.94rem");
exports.HeadingCaption = HeadingCaption;
const BodyTitle = _styledComponents.default.h5(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 22px;\n  display: block;\n"])));
exports.BodyTitle = BodyTitle;
const BodyCaption = _styledComponents.default.h5(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 20px;\n  word-spacing: 8px;\n  display: block;\n"])));
exports.BodyCaption = BodyCaption;
const HeadingMain = _styledComponents.default.h1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: ", ";\n  line-height: 15rem;\n  display: block;\n  margin: 0;\n"])), p => p.size || "15rem");
exports.HeadingMain = HeadingMain;
const BoldFontCaption = _styledComponents.default.h4(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 900;\n  font-size: 34px;\n  line-height: 41px;\n  display: block;\n"])));
exports.BoldFontCaption = BoldFontCaption;
const H1Caption = _styledComponents.default.h4(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 22px;\n  display: block;\n"])));
exports.H1Caption = H1Caption;
const FontCaption = _styledComponents.default.h5(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: ", ";\n  line-height: 1.5rem;\n  display: block;\n"])), p => p.size || "1.5rem");
exports.FontCaption = FontCaption;