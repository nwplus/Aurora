import React, { useState } from "react";
import styled from "styled-components";

const Toggle = (props) => {
  const [checked, setChecked] = useState(false);
  const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  `;
  const Switch = styled.div`
    width: 60px;
    height: 32px;
    background: #b3b3b3;
    border-radius: 32px;

    position: relative;
    width: 60px;
    height: 32px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
      transition: 300ms all;
      content: "";
      position: absolute;
      width: 28px;
      height: 28px;
      border-radius: 35px;
      top: 50%;
      left: 4px;
      background: white;
      transform: translate(0, -50%);
    }
  `;
  const Input = styled.input`
    opacity: 0;
    position: absolute;

    display: none;

    &:checked + ${Switch} {
      background: green;

      &:before {
        transform: translate(32px, -50%);
      }
    }
  `;

  return (
    <Label>
      <Input type="checkbox" onChange={props.handleChange} />
      <Switch />
      <span>Notifications</span>
    </Label>
  );
};

export { Toggle };
