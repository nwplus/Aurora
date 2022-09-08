import React from 'react';
import styled from 'styled-components';

import { H1, H2, H3, H4, HeadingMain, H5, H6 } from './Typography';

const TypographyPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr 1fr 0.8fr 0.7fr;
  font-family: 'HK Grotesk', sans-serif;
`;

const TypographyContainer = styled.div`
margin: 0 auto;
padding: 0px 30px 0px 10px;
vertical-align: text-top;
`;

const SameFontCaption = styled.h4`
font-style: normal;
font-weight: 900;
font-size: 34px;
line-height: 41px;
margin-top: -20px;
`

const H1Caption = styled.h4`
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
margin: 20px auto 10px auto;
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography'
};


const Template = () => <TypographyPageContainer>
    <TypographyContainer><HeadingMain>Aa</HeadingMain><H5>HK Grotesk</H5><SameFontCaption>"It's the same font!"</SameFontCaption></TypographyContainer>
    <TypographyContainer> <H1Caption>Weight/Size/Leading/Tracking</H1Caption><H1>Heading1</H1><H6>Black 56 56 +0.4</H6></TypographyContainer>
    <TypographyContainer>   <H2>Heading2</H2><H6>ExtraBold 42 34 +0.38</H6></TypographyContainer>
    <TypographyContainer><H3>Heading3</H3><H6>SemiBold 32 28 -0.26</H6></TypographyContainer>
    <TypographyContainer>  <H4>Heading4</H4><H6>SemiBold 24 26 -0.45</H6></TypographyContainer>
</TypographyPageContainer>;

export const Typography = Template.bind({});
