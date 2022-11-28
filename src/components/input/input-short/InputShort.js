import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { errorMessageCSS, InputShortComponentCSS } from './InputShortCSS';
import { colors } from '../../colors';
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

const InputShort = ({ disabled, isEmptyError, placeholder, onChange }) => {
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');
  const textOverMaxCharacterLimit = text.length > 50;
  const showEmptyErrorStyles = isEmptyError && text.length === 0;
  const showErrorMessage =
    (showEmptyErrorStyles || textOverMaxCharacterLimit) && !disabled;

  const changeHandler = (e) => {
    setText(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    if (showEmptyErrorStyles) {
      setErrorText('Please enter an input');
    } else if (textOverMaxCharacterLimit) {
      setErrorText("Looks like you're above 50 characters! Try again.");
    }
  }, [text, showEmptyErrorStyles]);

  return (
    <div>
      <InputShortComponent
        id='input-short-component'
        disabled={disabled}
        error={showEmptyErrorStyles || textOverMaxCharacterLimit}
        placeholder={placeholder}
        defaultValue={text}
        onChange={changeHandler}
      />
      {showErrorMessage && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  );
};

export { InputShort };
