import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  // component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['ButtonTextComponent'],
      control: { type: 'select'},
    },
    variant: { 
      options: ['primary', 'secondary'],
      control: { type: 'radio'},
    },
    text: { control: 'text' },
    isHover: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const ButtonTextComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonTextComponent.args = {
  type: 'ButtonTextComponent',
  variant: 'primary', 
  text: 'Button',
  isHover: false,
  isDisabled: false, 
};
