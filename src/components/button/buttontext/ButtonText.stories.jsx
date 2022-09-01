import React from "react";

import { ButtonText } from "./ButtonText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button/ButtonText",
  component: ButtonText,
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
const Template = (args) => <ButtonText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  active: true,
  label: 'Button',
  name: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  active: true,
  label: 'Button',
  name: 'Secondary'
};
