import React from 'react';

import { SidePanel } from './SidePanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/SidePanel",
    component: SidePanel,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

    argTypes: {
        active: {
            description: 'is active?',
            options: [true, false],
            control: { type: 'boolean' }
        }
    },
};


const Template = (args) => <SidePanel {...args} />;

export const SidePanelMenu = Template.bind({});
SidePanelMenu.args = {
    active: true,
    label: 'DASHBOARD',
    name: 'SidePanel'
}