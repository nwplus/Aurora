import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';

const Wrapper = styled.div`
  font-family: 'HK Grotesk', sans-serif;
  transition: 300ms;
`;

const Input = styled.input`
  font-size: 16px;
  width: 275px;
  height: 40px;
  background: transparent;
  border-radius: ${({ showOptions }) => (showOptions ? `7px 7px 0 0 ` : `7px`)};
  border: ${({ showOptions }) =>
    showOptions ? `2px solid ${colors.emerald400}` : ' 2px solid white'};
  display: flex;
  outline: none;
  padding-left: 12px;
  caret-color: transparent;
  color: ${({ selectedOption }) =>
    selectedOption ? `${colors.emerald400}` : 'white'};

  ::placeholder {
    color: ${colors.grey500};
  }

  &:hover {
	color: ${({ error }) => (error ? `white` : ` ${colors.emerald400}`)}
    border: 2px solid ${colors.emerald400};
  }

  &:focus {
    border: 2px solid ${colors.emerald400};
  }

  border: ${({ error }) => (error ? `2px solid ${colors.red500}` : '')};
`;

const OptionsWrapper = styled.div`
  background: ${colors.midnight400};
  width: 289px;
  border: 2px solid ${colors.emerald400};
  border-radius: 0 0 7px 7px;
  margin-top: -1px;
`;

const Option = styled.div`
  font-size: 14px;
  padding: 8px 12px;
  box-sizing: border-box;
  width: 289px;
  color: ${colors.midnight600};
  margin: auto;

  border-radius: ${({ isLastOption }) => (isLastOption ? '0 0 6px 6px' : '')};
  margin-bottom: ${({ isLastOption }) => (isLastOption ? '-1px' : '')};

  &:hover {
    background: ${colors.midnight300};
    font-weight: 700;
  }
`;

const ErrorMsg = styled.div`
  color: ${colors.red500};
  margin-top: 8px;
`;

const DropdownSelectComponent = ({ placeholder, options, error }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasError, setHasError] = useState(error);

  return (
    <Wrapper>
      <Input
        onClick={() => setShowOptions(!showOptions)}
        placeholder={placeholder}
        showOptions={showOptions}
        selectedOption={selectedOption}
        value={selectedOption}
        error={hasError}
      />
      {showOptions && options.length > 0 && (
        <OptionsWrapper>
          {options.map((option, index) => {
            return (
              <Option
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setShowOptions(false);
                  setHasError(false);
                }}
                isLastOption={index === options.length - 1}
              >
                {option}
              </Option>
            );
          })}
        </OptionsWrapper>
      )}
      {!showOptions && hasError && <ErrorMsg>Please select an option</ErrorMsg>}
    </Wrapper>
  );
};

export default DropdownSelectComponent;
