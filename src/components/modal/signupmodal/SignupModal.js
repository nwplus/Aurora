import styled from "styled-components";
import React from "react";

import {
  SignupModalCSS,
  HeaderTextCSS,
  BodyTextCSS,
  InputCSS,
  LogoCSS,
  CloseCSS,
  InputContainerCSS,
  SubscribeButtonCSS,
} from "./SignupModalCSS";
import Logo from "../../../assets/logos/logo-transparent.svg";
import ClosedIcon from "../../../assets/icons/functional/grey-close.svg";

const SignupModalComponent = styled.div`
  ${SignupModalCSS}
`;

const HeaderText = styled.h1`
  ${HeaderTextCSS}
`;

const BodyText = styled.p`
  ${BodyTextCSS}
`;

const LogoImage = styled.img`
  ${LogoCSS}
`;

const CloseIcon = styled.img`
  ${CloseCSS}
`;

const InputContainer = styled.div`
  ${InputContainerCSS}
`;

const Input = styled.input`
  ${InputCSS}
`;

const SubscribeButton = styled.button`
  ${SubscribeButtonCSS}
`;

const SignupModalContainer = ({ clickEvent }) => {
  return (
    <SignupModalComponent>
      <LogoImage src={Logo} />
      <CloseIcon src={ClosedIcon} />
      <HeaderText>nwPlus Newsletter Sign-up</HeaderText>
      <BodyText>
        Subscribe to our newsletter to stay up to date and for upcoming events!
      </BodyText>

      <InputContainer>
        <Input placeholder="hacker@nwplus.io" />
        <SubscribeButton onClick={clickEvent}>Subscribe</SubscribeButton>
      </InputContainer>
    </SignupModalComponent>
  );
};

export { SignupModalContainer };
