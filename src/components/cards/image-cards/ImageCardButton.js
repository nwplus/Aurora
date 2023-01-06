import React from "react";
import styled from "styled-components";
import { colors } from "../../colors/Colors";

const StyledButton = styled.a`
  font-weight: 700;
  text-decoration: none;
  font-family: "HK Grotesk", sans-serif;
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : "8px")};
  background: ${colors.gradientMain};
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => p.height};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em ${(p) => (p.noMargin ? "0em" : "0.5em")};
  padding: ${(p) => (p.padding ? p.padding : "0")};
  border: ${(p) => p.hollow && `2px solid ${colors.gradientMain}`};
  color: black;
`;

const Button = ({ link, ...props }) => <StyledButton href={link} {...props} />;

export default Button;
