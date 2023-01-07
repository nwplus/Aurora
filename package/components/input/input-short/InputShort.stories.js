"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ShortInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _InputShort = require("./InputShort");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/Input",
  component: _InputShort.InputShort,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      description: "is component disabled",
      options: [true, false],
      control: {
        type: "boolean"
      },
      isEmptyError: {
        description: "is component in empty error state",
        options: [true, false],
        control: {
          type: "boolean"
        }
      },
      value: {
        description: "component text value",
        control: {
          type: "string"
        }
      },
      placeholder: {
        description: "component placeholder",
        control: {
          type: "string"
        }
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_InputShort.InputShort, args);
const ShortInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ShortInput = ShortInput;
ShortInput.args = {
  disabled: false,
  isEmptyError: false,
  value: "",
  placeholder: "Text"
};