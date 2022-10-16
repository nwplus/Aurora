import React from 'react'

import {ProgressBarContainer} from './ProgressBar'

export default {
    title: 'Example/Indicators/ProgressBar',
    component: ProgressBarContainer,
    argTypes: {
        progressPercent: {
            description: 'number representing percentage value the bar should be set at',
            control: {
                type: 'number',
            },
        },
    },
};

const Template = (args) => <ProgressBarContainer {... args} />

export const ProgressBar = Template.bind({});
ProgressBar.args = {
    progressPercent: 50,
}