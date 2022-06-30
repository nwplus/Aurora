import styled from 'styled-components';

// Button
const LargeButton = (props) => {

    const getVariantStyles = (p) => {

        // Inactive button variant background state (primary, secondary, destructive)
        const inactiveSolid = 'background: #BDBAC3; color: #8C898F; cursor: default;'
        // Inactive outlined variant background state
        const inactiveOutlined = 'background: Transparent; color: #8c898f; outline: 2px solid #8c898f; padding: 0.7rem 1.5rem;'

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

            case "outline":
              styles += p.active ? `
                  font-family: "HK Grotesk", sans-serif;
                  font-size: 1em;
                  font-weight: 700;
                  background-color: transparent;
                  color: #20ffaf;
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

                  color: #00a399;
                  outline: none;
          
                  &:before {
                      background: none;
                  }
              }` : inactiveOutlined
            break;

            case "destructive":
                styles += p.active ? `
                    font-family: 'HK Grotesk', sans-serif;
                    font-size: 1em;
                    font-weight: 700;
                    background-color: #F65C5C;
                    color: #FFFFFF;
                    display: inline-block;
                    border-radius: 8px;
                    text-align: center;
                    padding: 0.8rem 1.5rem;
                
                    transition: 0.3s;
                    cursor: pointer;
          
                &:hover {
                    background-color: #F83D3D;
                    color: #FFFFFF;
                }
            
                &:disabled {
                    background: #BDBAC3
                    color: #8C898F;
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
