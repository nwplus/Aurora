import { colors } from "../../colors/index";

export const PrimaryButtonTextCSS = `
    color: ${colors.white};

    &:hover {
        background: ${colors.gradientMain};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    &:hover::after {
        margin-top: -2px;
        display: block;
        content: '';
        width: 100%;
        bottom: 0; 
        height: 2px;
        background-image: ${colors.gradientMain};
    }

    &::after {
        margin-top: -2px;
        display: block;
        content: '';
        width: 100%;
        bottom: 0; 
        height: 2px;
        background-color: ${colors.white};
    }
`;

export const SecondaryButtonTextCSS = `
    color: ${colors.midnight200};

    &:hover {
        background: ${colors.gradientMain};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover::after {
        margin-top: -2px;
        display: block;
        content: '';
        width: 100%;
        bottom: 0; 
        height: 2px;
        background-image: ${colors.gradientMain};
    }
`;

export const ButtonTextCSS = `
    display: table;
    user-select: none;

    font-family: 'HK Grotesk', sans-serif;
    text-align: center;
    font-size: 1.1250rem;
    font-weight: bold;

    transition: all 0.13s linear; 
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;
