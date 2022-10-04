import React from "react";

import { Calendar } from "./Calendar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Faq",
    component: Calendar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      // add later
    }
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Calendar {...args} />;

export const Calendar = Template.bind({});

Calendar.args = {
  active: true,
  name: 'Calendar'
}