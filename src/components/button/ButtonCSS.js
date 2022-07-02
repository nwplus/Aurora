import styled, { css, withTheme } from 'styled-components';
import { colors } from "../colors/index";

export const PrimaryCSS = css`
    background: linear-gradient(to bottom right, #0DEFE1, #78FF96); color: #2C2543;
    &::before {
        display:flex;
        align-items:center;
        justify-content:center;
        color: ${colors.teal600};

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 1;
        transition: opacity 0.25s ease-in-out;
        opacity: 0;

        background: linear-gradient(to bottom right, #D7FFF0, #7BFFCF);
    }

    &:hover::before {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }
`

export const SecondaryCSS = css`
    background: ${colors.white};
                        
    &:hover {
        background: ${colors.grey200};
    }

    &:active {
        transform: scale(0.97);
    }
`

export const OutlineCSS = css`
    font-family: "HK Grotesk", sans-serif;
    font-size: 1em;
    font-weight: 700;
    background-color: transparent;
    color: ${colors.emerald400};
    display: inline-block;
    border-radius: 8px;
    text-align: center;

    padding: 0.8rem 1.5rem;

    transition: 0.3s;
    cursor: pointer;
    position: relative;
    z-index: 0;

    &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 2px;
    border-radius: 8px;

    background: linear-gradient(to bottom right, #0defe1, #78ff96);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    }
    &:hover {
    background: linear-gradient(
    90deg,
    #d7fff0 0%,
    #a5ffde 54.61%,
    #7bffcf 100%
    );

    color: ${colors.teal600};
    outline: none;

    &:before {
        background: none;
    }
}
`

export const DestructiveCSS = css`
    font-family: 'HK Grotesk', sans-serif;
    font-size: 1em;
    font-weight: 700;
    background-color: ${colors.red500};
    color: ${colors.white};
    display: inline-block;
    border-radius: 8px;
    text-align: center;
    padding: 0.8rem 1.5rem;

    transition: 0.3s;
    cursor: pointer;

&:hover {
    background-color: ${colors.red600};
    color: ${colors.white};
}

&:disabled {
    background: ${colors.grey500};
    color: ${colors.grey600};
}
`

export const LargeButtonCSS = css`
    display: table;
    user-select: none;
    border-radius: 8px;
    padding: 0.8rem 1.5rem;

    font-family: "", sans-serif;
    font-weight: bold;

    transition: all 0.13s linear; 
    position: relative;
    overflow: hidden;
    cursor: pointer;
`