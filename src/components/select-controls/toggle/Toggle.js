import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { InputCSS, LabelCSS, SwitchCSS } from "./ToggleCSS";

const Toggle = (props) => {
  const [checked, setChecked] = useState(props.toggleOn);

  const handleChange = () => {
    setChecked(!checked);
  };

  const Label = styled.label`
    ${LabelCSS}
  `;

  const Switch = styled.div`
    ${SwitchCSS}
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
    ${InputCSS}
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
