import DropdownComplexSearchComponent from "./DropdownComplexSearch";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Dropdowns/DropdownComplexSearch',
    component: DropdownComplexSearchComponent,
  };
  
  const Template = (args) => <DropdownComplexSearchComponent {...args} />;
  
  const sampleOptions = [
    'University of British Columbia, Vancouver',
    'University of California Berkley',
    'University of California Los Angeles',
    'University of New South Wales, Sydney',
    'University of Washington'
  ];
  
  export const PrimarySelect = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  PrimarySelect.args = {
    placeholder: 'Enter your school',
    options: sampleOptions,
    error: false,
  };  