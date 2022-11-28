import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import { colors } from '../../colors/index';
import {
  InputLongAnswerCSS,
  InputCSS,
  ErrorMessageCSS,
  isFilledStyle,
} from './InputLongAnswerCSS';

const getInputStateStyles = (p) => {
  const errorStyle = `
    border: 0.25rem solid ${colors.red500};
`;
  let styles = '';

  if (!p.isEmpty) {
    styles += isFilledStyle;
  } else {
    styles += errorStyle;
  }

  return styles;
};

const InputLongAnswer = styled.div`
  ${InputLongAnswerCSS}
`;

const Input = styled.textarea`
  ${InputCSS}
  ${(p) => getInputStateStyles(p)}
`;

const ErrorMessage = styled.span`
  ${ErrorMessageCSS}
`;

const InputLongAnswerComponent = ({ isEmpty, onChange }) => {
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    let longAnswerComponent = document.getElementById('input-long-component');

    if (isEmpty) {
      setErrorText('Please enter your answer!');
      longAnswerComponent.style.borderColor = `${colors.red500}`;
    } else if (text.length > 650) {
      setErrorText("Looks like you're above 650 characters! Try again.");
      longAnswerComponent.style.borderColor = `${colors.red500}`;
    } else {
      setErrorText('');
      longAnswerComponent.style = isFilledStyle;
    }
  }, [text, isEmpty]);

  return (
    <InputLongAnswer isEmpty={isEmpty}>
      <Input
        id='input-long-component'
        isEmpty={isEmpty}
        placeholder='Maximum of 650 characters'
        defaultValue={text}
        onChange={changeHandler}
      ></Input>
      <ErrorMessage isEmpty={isEmpty}>{errorText}</ErrorMessage>
    </InputLongAnswer>
  );
};

export { InputLongAnswerComponent };
