import React from "react";

import { Toggle } from "./Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SelectControls/Toggle",
  component: Toggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    toggleOn: {
      description: "is component on",
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toggle {...args} />;

export const NotificationToggle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotificationToggle.args = {
  toggleOn: false,
};
