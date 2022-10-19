import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
  ErrorMsgCSS,
  ImageCSS,
  InputCSS,
  OptionCSS,
  OptionsWrapperCSS,
  WrapperCSS,
} from './DropdownSelectCSS';
import { colors } from '../../colors';
import { CaretLeft, CaretDown } from '../../../assets/icons';

const Wrapper = styled.div`
  ${WrapperCSS};
`;

const Input = styled.input`
${InputCSS}

  border-radius: ${({ showOptions }) => (showOptions ? `7px 7px 0 0 ` : `7px`)};
  border: ${({ showOptions }) =>
    showOptions ? `2px solid ${colors.emerald400}` : ' 2px solid white'};
  color: ${({ selectedOption }) =>
    selectedOption ? `${colors.emerald400}` : 'white'};

  &:hover {
	color: ${({ error }) => (error ? `white` : ` ${colors.emerald400}`)}
    border: 2px solid ${colors.emerald400};
  }

  border: ${({ error }) => (error ? `2px solid ${colors.red500}` : '')};
`;

const OptionsWrapper = styled.div`
  ${OptionsWrapperCSS}
`;

const Option = styled.div`
  ${OptionCSS}
  border-radius: ${({ isLastOption }) => (isLastOption ? '0 0 6px 6px' : '')};
  margin-bottom: ${({ isLastOption }) => (isLastOption ? '-1px' : '')};
`;

const ErrorMsg = styled.div`
  ${ErrorMsgCSS}
`;

const Image = styled.img`
  ${ImageCSS}
  top: ${({ showOptions }) => (showOptions ? '18px' : '21px')};
  filter: ${({ selectedOption, hasError, showOptions }) =>
    (!selectedOption && !showOptions) || hasError ? 'saturate(0)' : ''};
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
        readOnly
      />
      <Image
        src={showOptions ? CaretLeft : CaretDown}
        alt='Caret left'
        showOptions={showOptions}
        hasError={hasError}
        selectedOption={selectedOption}
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
