import styled from 'styled-components';
import { colors } from '../../colors/index';
import {
  FocusCSS,
  ButtonTagCSS,
  InactiveCSS,
  ActiveCSS,
  HoverCSS,
} from './ButtonTagCSS';

// ButtonTag
const ButtonTag = ({ label, disabled, onClick }) => {
  const ButtonTag = styled.button`
    ${ButtonTagCSS}
    ${ActiveCSS}
    ${!disabled &&
    `
        &:hover {
          ${HoverCSS}
        }
        &:hover > div {
          border: 2px solid ${colors.emerald400};
        }
        &:focus {
          ${FocusCSS}
        }
        &:focus > div {
          border: 2px solid ${colors.emerald400};
          background: ${colors.midnight600};
      }`}
    
    ${disabled ? InactiveCSS : ''}
  `;

  const Circle = styled.div`
    margin-left: -8px;
    margin-right: -10px;
    height: 20px;
    width: 20px;
    border: 2px solid white;
    ${!disabled &&
    `&:hover {
          border: 2px solid ${colors.emerald400};
        }
        &:focus {
          border: 2px solid ${colors.midnight400};
        }`}
    ${disabled ? `border: 2px solid ${colors.grey500};` : ''}
    border-radius: 20px;
    transition: all 0.13s linear;
  `;

  const TextContainer = styled.span`
    line-height: 24px;
    margin-left: 32px;
    margin-right: 8px;
  `;

  const Container = styled.div`
    display: inline-block;
  `;

  return (
    <Container onClick={onClick}>
      <ButtonTag>
        <Circle />
        <TextContainer>{label}</TextContainer>
      </ButtonTag>
    </Container>
  );
};

export { ButtonTag };
