import styled from 'styled-components';

const Button = (props) => {

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

        ${p => p.active 
            ? (p.variant === "primary" && (
                'background: linear-gradient(to bottom right, #0DEFE1, #78FF96); color: #2C2543; '
            )) || (p.variant === "secondary" && (
                'background: #FFF;'
            ))
            : 'background: #BDBAC3; color: #8C898F; cursor: default;'}

        ${p => (p.variant === "primary" && (
            `&::before {
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

            ${p.active 
                ? `
                    &:hover::before {
                        opacity: 1;
                    }` 
                : ''}`
            
            )) || (p.variant === "secondary" && 
                p.active ? `
                &:hover {
                    background: #F0EEF2;
                }` 
                : ''
            )}
            
        ${p => p.active ? `
        &:active {
            transform: scale(0.95);
        }` : ''}
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