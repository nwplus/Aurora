import React from "react";

import { ButtonTag } from "./ButtonTag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button/ButtonTag",
  component: ButtonTag,
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
const Template = (args) => <ButtonTag {...args} />;

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  variant: "active",
  label: "Developer",
  name: "Active"
};

export const Hover = Template.bind({});
Hover.args = {
  variant: "hover",
  label: "Developer",
  name: "Hover"
};

export const Inactive = Template.bind({});
Inactive.args = {
  variant: 'inactive',
  label: 'Developer',
  name: 'Inactive'
};

export const Focus = Template.bind({});
Focus.args = {
  variant: 'focus',
  label: 'Developer',
  name: 'Focus'
};