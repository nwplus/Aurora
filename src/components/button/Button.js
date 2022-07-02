import styled from 'styled-components';

import { colors } from "../colors/index";
import { DestructiveCSS, LargeButtonCSS, OutlineCSS, PrimaryCSS, SecondaryCSS } from './ButtonCSS';

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
                  ${PrimaryCSS}
                   &::before {
                        content: "${p.children}";
                    }

                ` : inactiveSolid
                break;

            case "secondary":
                styles += p.active ? `
                    ${SecondaryCSS}
                ` : inactiveSolid
                break;

            case "outline":
              styles += p.active ? `
                    ${OutlineCSS}
             ` : inactiveOutlined
            break;

            case "destructive":
                styles += p.active ? `
                    ${DestructiveCSS}
                ` : inactiveSolid
              break;

            default:
                break;
        }
        
        return styles
    }

    const LargeButton = styled.div`
      ${LargeButtonCSS}
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
