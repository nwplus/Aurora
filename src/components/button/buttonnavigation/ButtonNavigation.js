import styled from 'styled-components';
import { colors } from '../../colors/Colors';
import { ButtonNavigationCSS } from './ButtonNavigationCSS';

const ButtonNavigation = ({ active, variant, label, onClick }) => {
  const getActiveStyles = (p) => {
    const inactiveText = `color: ${colors.grey600}; pointer-events: none`;
    let styles = '';

    if (p.active) {
      styles += `${ButtonNavigationCSS}`;
    } else {
      styles += inactiveText;
    }

    return styles;
  };

  const ButtonNavigation = styled.div`
    ${ButtonNavigationCSS}
    ${(p) => getActiveStyles(p)}
  `;

  return (
    <ButtonNavigation active={active} variant={variant} onClick={onClick}>
      {label}
    </ButtonNavigation>
  );
};

export { ButtonNavigation };
