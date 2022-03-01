import React from 'react';
import styled from 'styled-components';

import { colors } from './Colors';

const ColorPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ColorContainer = styled.div`
  height: 30px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: bold;
  margin: 10px 5px;
  

  ${(p) => p.white && "color: white"}
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Color Palette',
  component: colors,
};

let colorVisual = Array.from(Object.keys(colors));

colorVisual.splice(-9, 0, 'empty');
colorVisual.splice(-9, 0, 'empty');
colorVisual.splice(-5, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');
colorVisual.splice(-3, 0, 'empty');

const Template = () => <ColorPageContainer>
  {colorVisual.map((colorName) => (colorName === 'empty') 
  ? <ColorContainer></ColorContainer>
  : <ColorContainer style={{background: colors[colorName]}} white={Number(colors[colorName][1]) <= 6}>{colorName}</ColorContainer>)}
</ColorPageContainer>;

export const ColorPalette = Template.bind({});
