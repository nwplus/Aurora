import React from 'react';

import { Checkbox } from './Checkbox';

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checkbox {...args} />;

export const Control = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Control.args = {
    variant: "control"
}