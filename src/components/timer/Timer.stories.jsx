import React from 'react';

import { TimerComponentContainer } from './Timer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Timer",
    component: TimerComponentContainer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        isActive: {
            description: 'is component active',
            options: [true, false],
            control: {
                type: 'boolean'
            }
        },
        time: {
            description: 'time in seconds to display',
            control: {
                type: 'number'
            }
        }
    },
};
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TimerComponentContainer {...args} />;

export const Timer = Template.bind({});
Timer.args = {
    isActive: false,
    time: 10
};