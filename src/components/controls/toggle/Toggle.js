import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import { InputCSS, LabelCSS, SwitchCSS } from './ToggleCSS';

const Toggle = ({ toggleOn, onChange }) => {
  const [checked, setChecked] = useState(toggleOn);

  const handleChange = () => {
    setChecked(!checked);
    onChange();
  };

  const Label = styled.label`
    ${LabelCSS}
  `;

  const Switch = styled.div`
    ${SwitchCSS}
  `;

  const ToggleStyles = () => {
    if (checked)
      return ` + ${Switch} {
      background: ${colors.gradientMain};

      &:before {
        transform: translate(26px, -50%);
      }`;
  };

  const Input = styled.input`
    ${InputCSS}
    ${() => ToggleStyles()}
  `;

  return (
    <Label>
      <Input
        type='checkbox'
        checked={checked}
        onChange={() => handleChange(checked)}
      />
      <Switch />
      <span>Notifications</span>
    </Label>
  );
