import { PrimaryCSS, SecondaryCSS } from '../button/ButtonCSS';

export const PillPrimaryCSS = `
    ${PrimaryCSS}
    border-radius: 100px;
`;

export const PillSecondaryCSS = `
    ${SecondaryCSS}
    border-radius: 100px;
`;

export const PillButtonCSS = `
    display: table;
    user-select: none;
    border-radius: 100px;
    padding: 0.8rem 1.5rem;

    font-family: "", sans-serif;
    font-weight: bold;

    transition: all 0.13s linear; 
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;
