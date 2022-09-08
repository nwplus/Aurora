import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 900;
  font-size: ${p => p.size || '3.5rem'};
  line-height: 3.5rem;
  letter-spacing: 0.4px;
`

export const H2 = styled.h2`
font-weight: 800;
font-size: ${p => p.size || '2.625rem'};
line-height: 2.625rem;
letter-spacing: 0.38px;
`

export const H3 = styled.h3`
font-weight: 600;
font-size: ${p => p.size || '2rem'};
line-height: 2rem;
`
export const H4 = styled.h4`
font-weight: 700;
font-size: ${p => p.size || '24px'};
line-height: 26px;
`

export const H5 = styled.h5`
font-weight: 400;
font-size: ${p => p.size || '1.5rem'};
line-height: 1.5rem;
`

export const H6 = styled.h6`
font-weight: 700;
font-size: ${p => p.size || '0.94rem'};
line-height: 0.94rem;
margin-top: -20px;
`


export const HeadingMain = styled.h1`
font-weight: 600;
font-size: ${p => p.size || '15rem'};
line-height: 15rem;
`