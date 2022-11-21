import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {  
          ErrorMsgCSS,
          OptionCSS,
          OptionsWrapperCSS,
          WrapperCSS, 
          InputCSS } from './DropdownComplexSearchCSS';
import { colors } from '../../colors';

import { Search } from '../../../assets/icons';

const Wrapper = styled.div`
  ${WrapperCSS};
`;

const Image = styled.img`
  filter: saturate(0);
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;


const Input = styled.input`
  ${InputCSS}
  padding-left: 40px;
  border-radius: ${({ showOptions }) => (showOptions ? `7px 7px 0 0 ` : `7px`)};
  border: ${({ showOptions }) =>
    showOptions ? `2px solid ${colors.emerald400}` : `2px solid ${colors.grey500}`};
  color: ${({ selectedOption }) => selectedOption ? `${colors.emerald400}` : `${colors.grey500}`};

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
  width: 320px;
  border-radius: ${({ isLastOption }) => (isLastOption ? '0 0 6px 6px' : '')};
  margin-bottom: ${({ isLastOption }) => (isLastOption ? '-1px' : '')};
`;

const ErrorMsg = styled.div`
  ${ErrorMsgCSS}
`;

const DropdownComplexSearchComponent = ({ placeholder, options, error }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasError, setHasError] = useState(error);

  const displayPrompt = event => {
    if (event.target.value == 0) {
      // Render "Start typing to search"
    }

    else {
      // Loop through options to filter schools when typing
      const filteredSchools = []
      for (let i=0; i < options.length; i++) {
        // If found school, append to filteredSchools
        if (options[i].includes(event.target.value)) {
          filteredSchools.push(options[i])
        }
      }

      if (filteredSchools.length > 0) {
        // Render items in filteredSchools as options
        // alert(filteredSchools)
        return (
          <OptionsWrapper>
            {filteredSchools.map((option, index) => {
              return (
                <Option
                  key={index}
                  onClick={() => {
                    setSelectedOption(option);
                    setShowOptions(false);
                    setHasError(false);
                  }}
                  isLastOption={index === filteredSchools.length - 1}
                >
                  {option}
                </Option>
              );
            })}
          </OptionsWrapper>
        )
      }
      else { 
        // Render "My school is not listed, use "event.target.value"
        //alert("My school is not listed, use " + event.target.value)
      }
    }

  }

  return (
    <Wrapper>
        
        <Image
          src={ Search }
          alt='Search icon'
        />

        <Input 
            onClick={() => setShowOptions(!showOptions)}
            placeholder={placeholder}
            showOptions={showOptions}
            selectedOption={selectedOption}
            onInput={displayPrompt}
            value={selectedOption}
            error={hasError}
        />

        {/* {displayPrompt} */}

        {/* {showOptions && options.length > 0 && (
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
        )} */}
        
        {!showOptions && hasError && <ErrorMsg>Please enter your school</ErrorMsg>}
    </Wrapper>
  );
};

export default DropdownComplexSearchComponent;
