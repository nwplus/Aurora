import { colors } from "../colors/index";

export const PrimaryCSS = `
    background: ${colors.gradientMain}; 
    color: ${colors.midnight600};
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

        background: ${colors.gradientMainLight}; ;
    }

    &:hover::before {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }
`

export const SecondaryCSS = `
    background: ${colors.white};
                        
    &:hover {
        background: ${colors.grey200};
    }

    &:active {
        transform: scale(0.97);
    }
`

export const OutlineCSS = `
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

    background: ${colors.gradientMain};

    -webkit-mask: ${colors.gradientTransparentMask} content-box,
        ${colors.gradientTransparentMask};
    mask: ${colors.gradientTransparentMask} content-box, ${colors.gradientTransparentMask};
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    }
    
    &:hover {
    background: ${colors.gradientMainLight};

    color: ${colors.teal600};
    outline: none;

    &:before {
        background: none;
    }
}
`

export const DestructiveCSS = `
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

export const PrimaryTextCSS = `
    font-family: 'HK Grotesk', sans-serif;
    text-align: center;
    font-size: 1.1250em; 
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
        margin-top: -4px;
        display: block;
        content: '';
        width: 100%;
        bottom: 0; 
        height: 2px;
        background-color: ${colors.black};
    }
`

export const SecondaryTextCSS = `
    font-family: 'HK Grotesk', sans-serif;
    text-align: center;
    font-size: 1.1250em; 
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
`

export const LargeButtonCSS = `
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