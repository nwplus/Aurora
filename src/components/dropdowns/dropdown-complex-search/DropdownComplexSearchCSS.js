import { colors } from '../../colors';

export const WrapperCSS = `
    font-family: 'HK Grotesk', sans-serif;
    transition: 300ms;
    position: relative;
    cursor: pointer;
`;

export const InputCSS = `
    font-size: 16px;
    width: 275px;
    height: 40px;
    background: transparent;
    display: flex;
    outline: none;
    padding-left: 12px;
    border: 2px solid ${colors.grey500};
    color: ${colors.grey500};

    ::placeholder {
        color: ${colors.grey500};
    }

    &:focus {
        border: 2px solid ${colors.emerald400};
        color: ${colors.emerald400};
    }
`;

export const OptionsWrapperCSS = `
background: ${colors.midnight400};
width: 317px;
border: 2px solid ${colors.emerald400};
border-radius: 0 0 7px 7px;
margin-top: -1px;
overflow: hidden;
`;

export const OptionCSS = `
font-size: 14px;
padding: 8px 12px;
box-sizing: border-box;
width: 289px;
color: ${colors.midnight600};
margin: auto;

&:hover {
  background: ${colors.midnight300};
  font-weight: 700;
}`;


export const ErrorMsgCSS = `
color: ${colors.red500};
margin-top: 8px;
`;