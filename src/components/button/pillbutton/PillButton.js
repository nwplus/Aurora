import React from "react";
import styled from "styled-components";
import { colors } from "../../colors/index";
import {
  PillButtonCSS,
  PillPrimaryCSS,
  PillSecondaryCSS,
} from "./PillButtonCSS";

const PillButton = ({ active, variant, label, onClick }) => {
  const getVariantStyles = (p) => {
    const inactiveSolid = `background: ${colors.grey500}; color: ${colors.grey600}; cursor: default; border-radius: 100px;`;
    let styles = "";

    switch (p.variant) {
      case "primary":
        styles += p.active
          ? `${PillPrimaryCSS}
               &::before {
                  content: "${p.children}";
                }`
          : inactiveSolid;
        break;

      case "secondary":
        styles += p.active ? `${PillSecondaryCSS}` : inactiveSolid;
        break;

      default:
        break;
    }

    return styles;
  };

  const PillButton = styled.div`
    ${PillButtonCSS}
    ${(p) => getVariantStyles(p)}
  `;

  return (
    <PillButton active={active} variant={variant} onClick={onClick}>
      {label}
    </PillButton>
  );
};

export { PillButton };
