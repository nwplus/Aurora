import React from 'react';
import styled from 'styled-components';

import { colors } from './Colors';

const ColorPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font: HK Grotesk;
`;

const ColorContainer = styled.div`
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font: bold;
  margin: 20px 7px;


  ${(p) => p.white && "color: white"}
  ${(p) => p.empty && "border: 1px dotted grey;"}
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
  ? <ColorContainer empty={true}></ColorContainer>
  : <ColorContainer style={{background: colors[colorName]}} white={Number(colors[colorName][1]) <= 5}>{colorName}</ColorContainer>)}
</ColorPageContainer>;

export const ColorPalette = Template.bind({});
