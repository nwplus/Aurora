import React from 'react';

import { InputLongAnswerComponent } from './InputLongAnswer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Input",
    component: InputLongAnswerComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        isFilled: {
            description: 'is component filled with text',
            options: [true, false],
            control: {
                type: 'boolean'
            }
        }
    },
};
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputLongAnswerComponent {...args} />;

export const InputLongAnswer = Template.bind({});
InputLongAnswer.args = {
    name: 'Input Long Answer',
    isFilled: false,
    aboveCharLimit: false,
    noAnswer: false, 
    label: 'Input Long Answer',
};