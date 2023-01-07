"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Typography = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = require("./Typography");
var _TypographyInternal = require("./TypographyInternal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Typography'
};
exports.default = _default;
const Template = () => /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyPageContainer, null, /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.HeadingMain, null, "Aa"), /*#__PURE__*/_react.default.createElement(_Typography.FontCaption, null, "HK Grotesk"), /*#__PURE__*/_react.default.createElement(_Typography.BoldFontCaption, null, "\"It's the same font!\"")), /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.H1Caption, null, "Weight/Size/Leading/Tracking"), /*#__PURE__*/_react.default.createElement(_Typography.H1, {
  style: {
    margin: 0
  }
}, "Heading1"), /*#__PURE__*/_react.default.createElement(_Typography.HeadingCaption, {
  style: {
    marginTop: 10
  }
}, "Black 56 56 +0.4"), /*#__PURE__*/_react.default.createElement(_TypographyInternal.BodyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.BodyTitle, null, "Body (Alt)"), /*#__PURE__*/_react.default.createElement(_Typography.BodyCaption, null, "Bold 18 22 -0.43"))), /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.H2, null, "Heading2"), /*#__PURE__*/_react.default.createElement(_Typography.HeadingCaption, null, "ExtraBold 42 34 +0.38"), /*#__PURE__*/_react.default.createElement(_TypographyInternal.BodyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.BodyTitle, {
  style: {
    fontWeight: 400
  }
}, "Body"), /*#__PURE__*/_react.default.createElement(_Typography.BodyCaption, null, "Regular 18 22 -0.43"), /*#__PURE__*/_react.default.createElement(_Typography.Paragraph, null, "paragraph"), /*#__PURE__*/_react.default.createElement(_Typography.Paragraph, null, "text boxes"), /*#__PURE__*/_react.default.createElement(_Typography.Paragraph, null, "menus"), /*#__PURE__*/_react.default.createElement(_Typography.Paragraph, null, "dropdowns"))), /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.H3, null, "Heading3"), /*#__PURE__*/_react.default.createElement(_Typography.HeadingCaption, null, "SemiBold 32 28 -0.26"), /*#__PURE__*/_react.default.createElement(_TypographyInternal.BodyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.BodyTitle, {
  style: {
    fontWeight: 400,
    fontSize: 14
  }
}, "Caption"), /*#__PURE__*/_react.default.createElement(_Typography.BodyCaption, null, "Regular 14 21 -0.31"), /*#__PURE__*/_react.default.createElement(_Typography.Paragraph, null, "labels + footnote"))), /*#__PURE__*/_react.default.createElement(_TypographyInternal.TypographyContainer, null, /*#__PURE__*/_react.default.createElement(_Typography.H4, null, "Heading4"), /*#__PURE__*/_react.default.createElement(_Typography.HeadingCaption, null, "SemiBold 24 26 -0.45")));
const Typography = Template.bind({});
exports.Typography = Typography;