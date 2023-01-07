import { DropdownSelectComponent } from "./DropdownSelect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dropdowns/DropdownSelect",
  component: DropdownSelectComponent,
};

const Template = (args) => <DropdownSelectComponent {...args} />;

const sampleOptions = [
  "High school",
  "Undergraduate",
  "Graduate or Post-Graduate",
  "Other",
];

export const PrimarySelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimarySelect.args = {
  placeholder: "Level of Education",
  options: sampleOptions,
  error: false,
};
