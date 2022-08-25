import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const Toggle = (props) => {
  const [checked, setChecked] = useState(props.toggleOn);

  const handleChange = () => {
    setChecked(!checked);
  };

  const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: white;

    font-family: "HK Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
  `;

  const Switch = styled.div`
    position: relative;
    width: 46px;
    height: 20px;
    background: ${colors.midnight500};
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;
    border: 2px white solid;

    &:before {
      transition: 300ms all;
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 35px;
      top: 50%;
      left: 4px;
      background: ${colors.midnight600};
      transform: translate(0, -50%);
    }
  `;

  const ToggleStyles = (p) => {
    if (checked)
      return ` + ${Switch} {
      background: ${colors.gradientMain};

      &:before {
        transform: translate(26px, -50%);
      }`;
  };

  const Input = styled.input`
    opacity: 0;
    position: absolute;
    display: none;
    ${(p) => ToggleStyles(p)}
  `;

  return (
    <Label>
      <Input
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(checked)}
      />
      <Switch />
      <span>Notifications</span>
    </Label>
  );
};

export { Toggle };
