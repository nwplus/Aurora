import styled from 'styled-components';

const LargeButton = (props) => {

    const getVariantStyles = (p) => {

        // Inactive button variant background state (primary, secondary, destructive)
        const inactiveSolid = 'background: #BDBAC3; color: #8C898F; cursor: default;'
        // Inactive outlined variant background state
        // const inactiveOutlined = ''

        let styles = ""

        switch(p.variant) {
            case "primary":
                styles += p.active ? `
                    background: linear-gradient(to bottom right, #0DEFE1, #78FF96); color: #2C2543;
                    &::before {
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        content: "${p.children}";
                        color: #00A399;
        
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
                    }` : inactiveSolid
                break;
            case "secondary":
                styles += p.active ? `
                    background: #FFF;
                    
                    &:hover {
                        background: #F0EEF2;
                    }

                    &:active {
                        transform: scale(0.97);
                    }` : inactiveSolid
                break;
            default:
                break;
        }
        
        return styles
    }

    const LargeButton = styled.div`
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
            
        ${p => getVariantStyles(p)}
    `

    return (
        <LargeButton 
          active={props.active} 
          variant={props.variant}>
            {props.label}
        </LargeButton>
    )
}

export { LargeButton }