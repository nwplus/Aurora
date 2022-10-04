import React from "react";

import { Number } from "./Number";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SelectControls/Number",
  component: Number,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isSelected: {
      description: "is component selected",
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Number {...args} />;

export const NumberToggle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NumberToggle.args = {
  isSelected: false,
  number: 1,
};
