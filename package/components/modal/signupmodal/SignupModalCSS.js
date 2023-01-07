"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscribeButtonCSS = exports.SignupModalCSS = exports.LogoCSS = exports.InputContainerCSS = exports.InputCSS = exports.HeaderTextCSS = exports.CloseCSS = exports.BodyTextCSS = void 0;
var _index = require("../../colors/index");
var _modalBackground = _interopRequireDefault(require("../../../assets/modal-background.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SignupModalCSS = "\n    height: 525px;\n    width: 823px;\n    background-color: ".concat(_index.colors.midnight600, ";\n    border-radius: 20px;\n    background-image: url(").concat(_modalBackground.default, ");\n    font-family: \"HK Grotesk\", sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-left: 61px;\n");
exports.SignupModalCSS = SignupModalCSS;
const LogoCSS = "\n    padding: 40px 0 93px 0;\n    width: 100px;\n";
exports.LogoCSS = LogoCSS;
const CloseCSS = "\n    position: absolute;\n    width: 23px;\n    left: 824px;\n    top: 47px;\n    cursor: pointer;\n";
exports.CloseCSS = CloseCSS;
const HeaderTextCSS = "\n    color: ".concat(_index.colors.emerald400, ";\n    width: 518px;\n    font-size: 39px;\n    margin: 0px;\n");
exports.HeaderTextCSS = HeaderTextCSS;
const BodyTextCSS = "\n    color: white;\n    width: 523px;\n    font-size: 23px;\n";
exports.BodyTextCSS = BodyTextCSS;
const InputContainerCSS = "\n    width: 764px;\n    height: 48px;\n    border-radius: 5px;\n    border-style: solid;\n    border-color: ".concat(_index.colors.emerald400, ";\n    margin-top: 48px;\n    // background-color: red;\n");
exports.InputContainerCSS = InputContainerCSS;
const InputCSS = "\n    margin-left: 10px;\n    font-size: 18px;\n    color: white;\n    height: 48px;\n    width: 550px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n";
exports.InputCSS = InputCSS;
const SubscribeButtonCSS = "\n    float: right;\n    border: none;\n    cursor: pointer;\n    background: ".concat(_index.colors.gradientMain, ";\n    font-size: 20px;\n    border-radius: 3px;    \n    height: 48px;\n    width: 193px\n");
exports.SubscribeButtonCSS = SubscribeButtonCSS;