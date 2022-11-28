import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 900;
  font-size: ${(p) => p.size || '3.5rem'};
  line-height: 3.5rem;
  letter-spacing: 0.4px;
`;

export const H2 = styled.h2`
  font-weight: 800;
  font-size: ${(p) => p.size || '2.625rem'};
  line-height: 2.625rem;
  letter-spacing: 0.38px;
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: ${(p) => p.size || '2rem'};
  line-height: 2rem;
`;
export const H4 = styled.h4`
  font-weight: 700;
  font-size: ${(p) => p.size || '24px'};
  line-height: 26px;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;

export const HeadingCaption = styled.h6`
  font-weight: 700;
  font-size: ${(p) => p.size || '0.94rem'};
  line-height: 0.94rem;
  word-spacing: 8px;
  margin-top: -20px;
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

export const HeadingMain = styled.h1`
  font-weight: 600;
  font-size: ${(p) => p.size || '15rem'};
  line-height: 15rem;
`;

export const BoldFontCaption = styled.h4`
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
  font-size: ${(p) => p.size || '1.5rem'};
  line-height: 1.5rem;
`;
