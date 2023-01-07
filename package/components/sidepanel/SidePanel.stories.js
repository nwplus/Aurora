"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SidePanelMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _SidePanel = require("./SidePanel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: "Example/SidePanel",
  component: _SidePanel.SidePanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    active: {
      description: 'is active?',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_SidePanel.SidePanel, args);
const SidePanelMenu = Template.bind({});
exports.SidePanelMenu = SidePanelMenu;
SidePanelMenu.args = {
  active: true,
  label: 'DASHBOARD',
  name: 'SidePanel'
};