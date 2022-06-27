import styled from 'styled-components';
import { colors } from "../colors/Colors";

const ButtonNavigationComponent = styled.button`

    position: absolute;
    padding: 0;
    background: none;
    border: none;

    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    /* identical to box height, or 200% */

    display: flex;
    align-items: center;
    text-transform: capitalize;

    /* white */

    color: ${colors.white};

    &:hover {
        background: ${colors.gradientMain};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    &:disabled {
        pointer-events: none;
        color: ${colors.grey600};
}`;

const Button = (props) => {
    const { type, text, } = props;

    if (type === 'ButtonNavigationComponent') {
        return (
            <ButtonNavigationComponent disabled={props.disabled}>
                {text}
            </ButtonNavigationComponent>
        )
    }
    return (
        <ButtonNavigationComponent disabled={props.disabled}>
            {text}
        </ButtonNavigationComponent>
    )
}

export default Button;

