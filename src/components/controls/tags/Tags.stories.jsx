import React from 'react';

import { Tags } from './Tags';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SelectControls/Tags",
  component: Tags,
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
    },
    selectable: {
      description: 'is component selectable',
      options: [true, false],
      control: {
        type: 'boolean'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tags {...args} />;

export const Tag = Template.bind({});
Tag.args = {
  //variant: 'navigation',
  active: true,
  selectable: false,
  selected: false,
  label: 'Tag',
  name: 'Tags'
}