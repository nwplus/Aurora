import React from "react";
import styled from "styled-components";
import { errorMessageCSS, InputShortComponentCSS } from "./InputShortCSS";
import { colors } from "../../colors";
const getDisabledOrErrorStyles = (p) => {
  if (p.disabled) {
    return `border-color: ${colors.grey500}; color:${colors.grey500}; &:hover {
      border-color: ${colors.grey500};
    }`;
  }
  if (p.error) {
    return `border-color: ${colors.red500};  &:hover {
      border-color: ${colors.red500};
    }
    &:focus {
      color: white;
    }
    `;
  }
};

const InputShortComponent = styled.input`
  ${InputShortComponentCSS};
  ${(p) => getDisabledOrErrorStyles(p)}
`;

const ErrorMessage = styled.div`
  ${errorMessageCSS};
`;

const InputShort = ({ disabled, error, errorMessage }) => {
  return (
    <div style={{ background: "black" }}>
      <InputShortComponent
        id="input-short-component"
        disabled={disabled}
        error={error}
      />
      {error && !disabled && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export { InputShort };
