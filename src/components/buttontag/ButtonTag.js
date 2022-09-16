import styled from 'styled-components';
import {
  FocusCSS,
  ButtonTagCSS,
  InactiveCSS,
  ActiveCSS,
  HoverCSS
} from "./ButtonTagCSS";
import WhiteCircle from "../../assets/objects/whitecircle.svg";
import GradientMainCircle from "../../assets/objects/gradientmaincircle.svg";
import GreyCircle from "../../assets/objects/greycircle.svg";
import FocusCircle from "../../assets/objects/focuscircle.svg";

// ButtonTag
const ButtonTag = (props) => {
  const getVariantStyles = (p) => {
        let styles = ""

        switch(p.variant) {
            case "active":
                styles += ActiveCSS
                break;

            case "hover":
                styles += HoverCSS
                break;

            case "inactive":
                styles += InactiveCSS
                break;

            case "focus":
                styles += FocusCSS
                break;

            default:
                break;
        }

      return styles;
  };

  const getColoredCircle = (p) => {
    let Circle = WhiteCircle
    switch (p.variant) {
      case "hover":
          Circle = GradientMainCircle
          break;

      case "inactive":
          Circle = GreyCircle
          break;

      case "focus":
          Circle = FocusCircle
          break;

      default:
          break;
    }

    return (
      <img src={Circle} alt="circle" />
    )
  };

  const ButtonTag = styled.div`
    ${ButtonTagCSS}
    ${(p) => getVariantStyles(p)}
  `;

  const CircleContainer = styled.div`
    margin-right: 10px;
  `

  const TextContainer = styled.span`
    margin-top: 3px;
  `

  const Container = styled.div`
    display: inline-block;
  `

  return (
    <Container>
      <ButtonTag variant={props.variant}>
        <CircleContainer>
          {getColoredCircle(props)}
        </CircleContainer>
        <TextContainer>
          {props.label}
        </TextContainer>
      </ButtonTag>
    </Container>
  );
};

export { ButtonTag };
