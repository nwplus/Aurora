import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';

const Wrapper = styled.input`
  font-family: 'HK Grotesk', sans-serif;
  font-size: 16px;
  width: 275px;
  height: 40px;
  background: black;
  border-radius: 7px;
  border: 2px solid white;
  display: flex;
  outline: none;
  padding-left: 12px;
  color: white;
  transition: 300ms;

  ::placeholder {
    color: ${colors.grey500};
  }

  &:hover {
    color: ${colors.emerald400};
  }
`;

const OptionsWrapper = styled.div`
  background: ${colors.midnight400};
  width: 287px;
  height: 200px;
  margin-top: -2px;
  border: 2px solid ${colors.emerald400};
  border-radius: 0 0 7px 7px;
`;

const Option = styled.div`
  height: 22px;
  width: 100%;
  backgroundL blue;
  color: ${colors.midnight600};
`;

const DropdownSelectComponent = ({ placeholder, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  console.log(options);
  return (
    <div>
      <Wrapper
        onClick={() => setShowOptions(!showOptions)}
        placeholder={placeholder}
      />
      {showOptions && options.length > 0 && (
        <OptionsWrapper>
          {options.map((option, index) => {
            return <Option key={index}>Test</Option>;
          })}
        </OptionsWrapper>
      )}
    </div>
  );
};

export default DropdownSelectComponent;
