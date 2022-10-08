import React from "react";

import { CalendarComponent } from "./Calendar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Faq/Calendar",
    component: CalendarComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      active: {
        description: 'is component active',
        options: [true, false],
        control: {
          type: 'boolean'
        }
      }
    },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CalendarComponent {...args} />;

export const Calendar = Template.bind({});

Calendar.args = {
  active: true,
  name: 'Calendar',
  title: "Input Title",
  date: "Input Date",
  description: "Input Description"
}