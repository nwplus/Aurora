import React from 'react';

import { ButtonNavigation } from './ButtonNavigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonNavigation',
  component: ButtonNavigation,
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
const Template = (args) => <ButtonNavigation {...args} />;

export const ButtonNav = Template.bind({});
ButtonNav.args = {
  //variant: 'navigation',
  active: true,
  label: 'Button',
  name: 'ButtonNavigation'
}
