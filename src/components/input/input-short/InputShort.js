import React from "react";
import styled from "styled-components";
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
  position: relative;
  transition: 0.3s;
  background-color: transparent;
  width: 474px;
  height: 22px;
  border-radius: 8px;
  border: 2px solid white;
  gap: 10px;
  color: white;
  outline: none;
  z-index: 0;

  padding: 13px;
  font-family: "HK Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  transition: 0.4s;

  &:hover {
    border-color: ${colors.emerald400};
  }

  &:focus {
    color: ${colors.emerald400};
  }
  ${(p) => getDisabledOrErrorStyles(p)}
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: ${colors.red500};
  font-family: "HK Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  padding: 4px 0;
  margin-top: 4px;
`;

const InputShort = ({ disabled, error, errorMessage }) => {
  return (
    <div>
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
