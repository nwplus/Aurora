import React from "react";

import { ImageCardComponent } from "./ImageCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Cards/ImageCard",
  component: ImageCardComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: {
      description: "is component active",
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    link: {
      description: "link to hackathon",
      control: {
        type: "text",
      },
    },
    date: {
      description: "date of hackathon",
      control: {
        type: "text",
      },
    },
    imageLink: {
      description: "link to image",
      control: {
        type: "text",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImageCardComponent {...args} />;

export const ImageCard = Template.bind({});

ImageCard.args = {
  active: true,
  link: "https://hackcamp.nwplus.io",
  date: "Nov 5 - 6",
  imageLink: "./HackCamp2022.png",
};
