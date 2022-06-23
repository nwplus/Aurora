import styled from "styled-components";
import { colors } from "../colors/Colors";

const ButtonTextComponent = styled.button`
    padding: 0;
    text-align: center;
    font-style: normal;
    font-weight: 800; 
    font-size: 18px; 
    line-height: 22px;
    display: inline; 
    color: ${p => (p.disabled) ? colors.grey600 : (p.variant === 'primary') ? colors.white : colors.midnight200}; 
    ${p => (!p.disabled && p.hovered) ? 
        `background: -webkit-linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;` : 
        `background: none;`}
    border: none; 

    &::after {
        margin-top: -2px;
        display: block;
        content: '';
        width: 100%;
        bottom: 0; 
        height: 2px;
        background-image: ${p => (!p.disabled && p.hovered) ? '-webkit-linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);' : 'none'};
        background-color: ${p => (!p.disabled && (p.variant === 'primary')) ? colors.white : 'none'}; 
    }
    `;
    
const Button = (props) => {
    const { type, variant, text, isHover, isDisabled } = props;

    if (type === 'ButtonTextComponent') {
        return (
            <ButtonTextComponent variant={variant} hovered={isHover} disabled={isDisabled}>
                {text}
            </ButtonTextComponent>
        )
    }

    return (
        <ButtonTextComponent variant={variant} hovered={isHover} disabled={isDisabled}>
            {text}
        </ButtonTextComponent>
    )
}

export default Button