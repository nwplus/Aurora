import { colors } from "../../colors/index";

export const InputLongAnswerCSS = `
    width: 800px;
    display: flex;
    flex-direction: column;
`;

export const InputCSS = `
    height: 303px; 
    width: calc(100% - 100px);
    overflow-y: scroll; 
    color: ${colors.grey500};
    border: 0.25rem solid ${colors.white};
    border-radius: 10px;
    background-color: ${colors.midnight600};
    padding: 20px 100px 20px 20px; 
    position: relative;
    resize: none; 
    font-family: 'HK Grotesk', sans-serif;
    font-size: 1.3rem;
    line-height: 1.8rem;
    font-weight: 400;
    z-index: 0;
    display: inline-block;
    transition: 0.4s;

    &:focus {
        outline: none;
        border-color: ${colors.white};
    }

    &::-webkit-scrollbar {
        width: 0.65rem; 
    }

    &::-webkit-scrollbar-track {
        background: ${colors.grey500};
        background: rgba(0, 0, 0, 0);
        border-radius: 100vw;
        margin-block: .7rem;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${colors.grey500};
        background: rgba(255, 255, 255, 1);
        border-radius: 100vw;
    }
`;

export const ErrorMessageCSS = `
    color: ${colors.red500};
    width: 100%;
    font-family: 'HK Grotesk', sans-serif;
    text-align: left;
    font-size: 1.1250rem;
    line-height: 1.375rem;
    font-weight: 400;
`;

export const isFilledStyle = `
    color: ${colors.emerald400}; 
    &:hover {border-color: ${colors.emerald400}} 
    &:focus {border-color:white}
`;
