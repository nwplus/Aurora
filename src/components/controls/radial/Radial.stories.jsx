import React from "react";

import { Radial } from "./Radial";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SelectControls/Radial",
  component: Radial,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: {
      description: 'is component active',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    },
    onClick: {
        action: 'clicked'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Radial {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  active: true,
  checked: true,
  label: "Radial",
  name: "Primary",
};