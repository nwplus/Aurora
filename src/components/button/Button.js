import styled from 'styled-components';

const Button = (props) => {

    const getVariantStyles = (p) => {

        // Inactive button variant background state (primary, secondary, destructive)
        const inactiveSolid = 'background: #BDBAC3; color: #8C898F; cursor: default;'
        // Inactive outlined variant background state
        // const inactiveOutlined = ''

        let styles = ""

        // Initial states
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
                    }` : inactiveSolid
                break;
            case "secondary":
                styles += p.active ? 'background: #FFF;' : inactiveSolid
                break;
            default:
                break;
        }

        // Action states (only when active)
        if (p.active) {

            // default active state
            styles += `
                &:active {
                    transform: scale(0.97);
                }`
            
            // hover states
            switch(p.variant) {
                case "primary":
                    styles += `
                        &:hover::before {
                            opacity: 1;
                        }` 
                    break;
                case "secondary":
                    styles += `
                        &:hover {
                            background: #F0EEF2;
                        }`
                    break;
                default:
                    break;
            }
        }

        return styles
    }

    const Button = styled.div`
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
        
        position: relative;
            
        ${p => getVariantStyles(p)}
    `

    return (
        <Button 
          active={props.active} 
          variant={props.variant}>
            {props.label}
        </Button>
    )
}

export { Button }