import React from 'react';

import CheckboxComponent from './CheckboxComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Input/Checkbox",
    component: CheckboxComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   
};
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CheckboxComponent {...args} />;

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
    label: '',
    checked: false
};

export const Control = Template.bind({});
Control.args = {
    variant: "control",
    checked: false,
    active: [true, false],
    control: {
        type: 'boolean'
    }
}