import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  name: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  name: 'Secondary'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  name: 'Large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  name: 'Small'
};

export const Outline = Template.bind({});
Outline.args = {
  size: 'large',
  label: 'Button',
  name: 'Outline'
};

export const Destructive = Template.bind({});
Destructive.args = {
  size: 'large',
  label: 'Button',
  name: 'Destructive'
};
