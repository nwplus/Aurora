import { colors } from "../colors/index";

export const ActiveCSS = `
    color: ${colors.white};
    border: 2px solid ${colors.white};
`

export const HoverCSS = `
    color: ${colors.emerald400};
    border: 2px solid ${colors.emerald200};
`

export const InactiveCSS = `
    color: ${colors.grey500};
    border: 2px solid ${colors.grey500};
`

export const FocusCSS = `
    background: ${colors.gradientMain};
    color: ${colors.midnight600};
`

export const ButtonTagCSS = `
    display: flex;
    user-select: none;
    border-radius: 8px;
    text-align: center;
    padding: 11px 24px;
    font-size: 1.125rem;

    font-family: "", sans-serif;

    transition: all 0.13s linear;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`