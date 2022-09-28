import { colors } from "../colors/index";

export const TimerCSS = `
    height: 160px; 
    width: 410px;
    color: ${colors.white};
    background-color: #333;
    display: flex;
    flex-direction: column;
    font-family: 'HK Grotesk', sans-serif;
    text-align: center;
    font-weight: 600;
`;

export const TimerHeadingCSS = `
    font-size: 1.25rem;
`

export const TimerContainerCSS = `
    display: flex;
    flex-direction: column;  
    width: 100%; 
`;

export const TimerNumsCSS = `
    font-size: 4.5rem;
    justify-content: center;
    align-items: center;
    width: 100%; 
`;

export const TimerLabelsCSS = `
    font-size: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;