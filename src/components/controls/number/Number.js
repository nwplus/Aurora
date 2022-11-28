import React, { useState } from 'react';
import styled from 'styled-components';
import { UnfilledContainerCSS, FilledContainerCSS } from './NumberCSS';

const Number = ({ isSelected, number }) => {
  const [isFilled, setIsFilled] = useState(isSelected);

  const handleChange = () => {
    setIsFilled(!isFilled);
  };

  const UnfilledContainer = styled.div`
    ${UnfilledContainerCSS};
  `;

  const FilledContainer = styled.div`
    ${FilledContainerCSS};
  `;

  return (
    <div onClick={() => handleChange()}>
      {isFilled ? (
        <UnfilledContainer>{number}</UnfilledContainer>
      ) : (
        <FilledContainer>{number}</FilledContainer>
      )}
    </div>
  );
};

export { Number };
