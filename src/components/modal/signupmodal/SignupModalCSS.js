import { colors } from "../../colors/index";
import ModalBackground from "../../../assets/modal-background.svg";

export const SignupModalCSS = `
    height: 525px;
    width: 823px;
    background-color: ${colors.midnight600};
    border-radius: 20px;
    background-image: url(${ModalBackground});
    font-family: "HK Grotesk", sans-serif;
    display: flex;
    flex-direction: column;
    padding-left: 61px;
`;

export const LogoCSS = `
    padding: 40px 0 93px 0;
    width: 100px;
`;

export const CloseCSS = `
    position: absolute;
    width: 23px;
    left: 824px;
    top: 47px;
    cursor: pointer;
`;

export const HeaderTextCSS = `
    color: ${colors.emerald400};
    width: 518px;
    font-size: 39px;
    margin: 0px;
`;

export const BodyTextCSS = `
    color: white;
    width: 523px;
    font-size: 23px;
`;

export const InputContainerCSS = `
    width: 764px;
    height: 48px;
    border-radius: 5px;
    border-style: solid;
    border-color: ${colors.emerald400};
    margin-top: 48px;
    // background-color: red;
`;

export const InputCSS = `
    margin-left: 10px;
    font-size: 18px;
    color: white;
    height: 48px;
    width: 550px;
    border: none;
    outline: none;
    background-color: transparent;
`;

export const SubscribeButtonCSS = `
    float: right;
    border: none;
    cursor: pointer;
    background: ${colors.gradientMain};
    font-size: 20px;
    border-radius: 3px;    
    height: 48px;
    width: 193px
`;
