import styled from 'styled-components';
import { colors } from "../colors/Colors";
import { ButtonNavigationCSS } from './ButtonNavigationCSS';

const ButtonNavigation = (props) => {
    const getVariantStyles = (p) => {
      const inactiveText = `color: ${colors.grey600}; pointer-events: none`;
  
          let styles = ""
  
          switch(p.variant) {
              case "navigation":
                  styles += p.active ? `
                      ${ButtonNavigationCSS}
                  ` : inactiveText
                  break;
  
              default:
                  break;
          }
  
          return styles
      }
  
    const ButtonNavigation = styled.div`
      ${ButtonNavigationCSS}
      ${(p) => getVariantStyles(p)} 
    `;
  
    return (
      <ButtonNavigation active={props.active} variant={props.variant}>
        {props.label}
      </ButtonNavigation>
    );
  };
  
  export { ButtonNavigation };