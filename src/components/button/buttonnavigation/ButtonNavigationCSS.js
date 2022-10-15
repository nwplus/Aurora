import { colors } from "../../colors/index";

export const ButtonNavigationCSS = `
    position: absolute;
    padding: 0;
    background: none;
    border: none;

    font-family: 'HK Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 48px;
    /* identical to box height, or 200% */

    display: table;
    align-items: center;

    color: ${colors.white};

    &:hover {
        background: ${colors.gradientMain};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }`;
