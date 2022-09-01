import React from "react";

import { InputShort } from "./InputShort";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: InputShort,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      description: "is component disabled",
      options: [true, false],
      control: {
        type: "boolean",
      },
      isEmptyError: {
        description: "is component in empty error state",
        options: [true, false],
        control: {
          type: "boolean",
        },
      },
      value: {
        description: "component text value",
        control: {
          type: "string",
        },
      },
      placeholder: {
        description: "component placeholder",
        control: {
          type: "string",
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputShort {...args} />;

export const ShortInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ShortInput.args = {
  disabled: false,
  isEmptyError: false,
  value: "",
  placeholder: "Text",
};
