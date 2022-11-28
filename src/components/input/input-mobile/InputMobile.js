import React, { useState } from 'react';
import styled from 'styled-components';
import {
  InputMobileCSS,
  InputMobileLightCSS,
  InputMobileDarkCSS,
  InputMobileTransparentCSS,
} from './InputMobileCSS';

const getVariantStyles = (p) => {
  let styles = '';
  switch (p.variant) {
    case 'light':
      styles += `${InputMobileLightCSS}`;
      break;
    case 'dark':
      styles += `${InputMobileDarkCSS}`;
      break;
    case 'transparent':
      styles += `${InputMobileTransparentCSS}`;
      break;
  }
  return styles;
};

const Input = styled.input`
  ${InputMobileCSS}
  ${(p) => getVariantStyles(p)} 
	${(p) => ` { width: ${p.width}px }`}
`;

const InputMobile = ({ width, variant, placeholder, onChange }) => {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
    onChange(e);
  };

  return (
    <Input
      id='input-mobile-component'
      placeholder={placeholder}
      value={text}
      width={width}
      variant={variant}
      onChange={changeHandler}
    />
  );
};

export { InputMobile };
