import React from 'react';
import Button from './Button';

export default {
  title: 'Button',

  argTypes: {
    type: {
      options: ['ButtonTextComponent'],
      control: { type: 'select'},
    },
    disabled: {
      description: 'is component active',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    },
    text: {control: 'text'}
  }
};

const Template = (args) => <Button {...args} />;

export const ButtonNavigationComponent = Template.bind({});
ButtonNavigationComponent.args = {
  type: 'ButtonNavigationComponent',
  disabled: true,
  text: 'Button',
};