import React from "react";

import { H1, H2, H3, H4 } from "./Typography";

import {
  HeadingMain,
  FontCaption,
  HeadingCaption,
  BodyTitle,
  BodyCaption,
  BodyContainer,
  Paragraph,
  TypographyPageContainer,
  TypographyContainer,
  SameFontCaption,
  H1Caption,
} from "./TypographyInternal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography",
};

const Template = () => (
  <TypographyPageContainer>
    <TypographyContainer>
      <HeadingMain>Aa</HeadingMain>
      <FontCaption>HK Grotesk</FontCaption>
      <SameFontCaption>"It's the same font!"</SameFontCaption>
    </TypographyContainer>
    <TypographyContainer>
      <H1Caption>Weight/Size/Leading/Tracking</H1Caption>
      <H1 style={{ margin: 0 }}>Heading1</H1>
      <HeadingCaption style={{ marginTop: 10 }}>
        Black 56 56 +0.4
      </HeadingCaption>
      <BodyContainer>
        <BodyTitle>Body (Alt)</BodyTitle>
        <BodyCaption>Bold 18 22 -0.43</BodyCaption>
      </BodyContainer>
    </TypographyContainer>
    <TypographyContainer>
      <H2>Heading2</H2>
      <HeadingCaption>ExtraBold 42 34 +0.38</HeadingCaption>
      <BodyContainer>
        <BodyTitle style={{ fontWeight: 400 }}>Body</BodyTitle>
        <BodyCaption>Regular 18 22 -0.43</BodyCaption>
        <Paragraph>paragraph</Paragraph>
        <Paragraph>text boxes</Paragraph>
        <Paragraph>menus</Paragraph>
        <Paragraph>dropdowns</Paragraph>
      </BodyContainer>
    </TypographyContainer>
    <TypographyContainer>
      <H3>Heading3</H3>
      <HeadingCaption>SemiBold 32 28 -0.26</HeadingCaption>
      <BodyContainer>
        <BodyTitle style={{ fontWeight: 400, fontSize: 14 }}>Caption</BodyTitle>
        <BodyCaption>Regular 14 21 -0.31</BodyCaption>
        <Paragraph>labels + footnote</Paragraph>
      </BodyContainer>
    </TypographyContainer>
    <TypographyContainer>
      <H4>Heading4</H4>
      <HeadingCaption>SemiBold 24 26 -0.45</HeadingCaption>
    </TypographyContainer>
  </TypographyPageContainer>
);

export const Typography = Template.bind({});
