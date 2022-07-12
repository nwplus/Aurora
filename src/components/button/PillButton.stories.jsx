import React from 'react';

import { PillButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PillButton',
  component: PillButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: {
      description: 'is component active',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PillButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  active: true,
  label: 'PillButton',
  name: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  active: true,
  label: 'PillButton',
  name: 'Secondary'
};
