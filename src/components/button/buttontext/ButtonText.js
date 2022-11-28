import styled from 'styled-components';

import { colors } from '../../colors/index';
import {
  ButtonTextCSS,
  PrimaryButtonTextCSS,
  SecondaryButtonTextCSS,
} from './ButtonTextCSS';

// ButtonText
const ButtonText = ({ active, variant, label, onClick }) => {
  const getVariantStyles = (p) => {
    const inactiveText = `color: ${colors.grey600}; cursor: default`;

    let styles = '';

    switch (p.variant) {
      case 'primary':
        styles += p.active ? `${PrimaryButtonTextCSS}` : inactiveText;
        break;

      case 'secondary':
        styles += p.active ? `${SecondaryButtonTextCSS}` : inactiveText;
        break;

      default:
        break;
    }

    return styles;
  };

  const ButtonText = styled.div`
    ${ButtonTextCSS}
    ${(p) => getVariantStyles(p)}
  `;

  return (
    <ButtonText active={active} variant={variant} onClick={onClick}>
      {label}
    </ButtonText>
  );
};

export { ButtonText };
