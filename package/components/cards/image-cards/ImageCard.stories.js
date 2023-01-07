"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImageCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _HackCamp = _interopRequireDefault(require("./HackCamp2022.png"));
var _ImageCard = require("./ImageCard");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Cards/ImageCard",
  component: _ImageCard.ImageCardComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: {
      description: "is component active",
      options: [true, false],
      control: {
        type: "boolean"
      }
    },
    link: {
      description: "link to hackathon",
      control: {
        type: "text"
      }
    },
    date: {
      description: "date of hackathon",
      control: {
        type: "text"
      }
    },
    imageLink: {
      description: "link to image",
      control: {
        type: "text"
      }
    }
  }
};
exports.default = _default;
console.log(_HackCamp.default);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => /*#__PURE__*/_react.default.createElement(_ImageCard.ImageCardComponent, args);
const ImageCard = Template.bind({});
exports.ImageCard = ImageCard;
ImageCard.args = {
  active: true,
  link: "https://hackcamp.nwplus.io",
  date: "Nov 5 - 6",
  imageLink: _HackCamp.default
};