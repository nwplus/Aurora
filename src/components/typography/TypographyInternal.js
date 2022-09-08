import styled from "styled-components";

export const TypographyPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.1fr 1fr 0.8fr 0.7fr;
  font-family: "HK Grotesk", sans-serif;
`;

export const TypographyContainer = styled.div`
  margin: 0 auto;
  padding: 0px 30px 0px 0px;
  vertical-align: text-top;
`;

export const SameFontCaption = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 41px;
  margin-top: -25px;
`;

export const H1Caption = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  margin: 20px auto 10px auto;
`;

export const FontCaption = styled.h5`
  font-weight: 400;
  font-size: ${(p) => p.size || "1.5rem"};
  line-height: 1.5rem;
`;

export const HeadingCaption = styled.h6`
  font-weight: 700;
  font-size: ${(p) => p.size || "0.94rem"};
  line-height: 0.94rem;
  word-spacing: 8px;
  margin-top: -20px;
`;

export const HeadingMain = styled.h1`
  font-weight: 600;
  font-size: ${(p) => p.size || "15rem"};
  line-height: 15rem;
`;

export const BodyTitle = styled.h5`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
`;

export const BodyCaption = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  word-spacing: 8px;
  margin-top: -20px;
`;

export const BodyContainer = styled.div`
  position: absolute;
  top: 12rem;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;
