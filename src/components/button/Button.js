import styled from 'styled-components';

import { colors } from "../colors/index";
import {
  DestructiveCSS,
  ButtonCSS,
  OutlineCSS,
  PrimaryCSS,
  SecondaryCSS,
  ButtonNavigationCSS
} from "./ButtonCSS";

// Button
const Button = (props) => {
  const getVariantStyles = (p) => {

        // Inactive button variant background state (primary, secondary, destructive)
        const inactiveSolid = `background: ${colors.grey500}; color: ${colors.grey600}; cursor: default;`

        // Inactive outlined variant background state
        const inactiveOutlined = `background: Transparent; color: ${colors.grey600}; outline: 2px solid ${colors.grey600}; padding: 0.7rem 1.5rem;`

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

            case "navigation":
                styles += p.active ? `
                    ${ButtonNavigationCSS}
                ` : `
                pointer-events: none;
                color: ${colors.grey600};
                font-size: 24px;
                `
              break;

            default:
                break;
        }

        return styles
    }

  const Button = styled.div`
    ${ButtonCSS}
    ${(p) => getVariantStyles(p)} // todo: (p) => getSizeStyles(p)
  `;

  return (
    <Button active={props.active} variant={props.variant}>
      {props.label}
    </Button>
  );
};

export { Button };
