import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
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
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  active: true,
  label: "Button",
  name: "Primary",
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  active: true,
  label: "Button",
  name: "Secondary",
  size: "small",
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
  variant: "outline",
  active: true,
  size: 'large',
  label: 'Button',
  name: 'Outline'
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  active: true,
  size: 'large',
  label: 'Button',
  name: 'Destructive'
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: "primaryText",
  active: true,
  size: 'small',
  label: 'Button',
  name: 'Primary Text'
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: "secondaryText",
  active: true,
  size: 'small',
  label: 'Button',
  name: 'Secondary Text'
};
