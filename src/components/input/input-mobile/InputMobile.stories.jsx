import { InputMobile } from "./InputMobile";

export default {
    title: "Example/Input/InputMobile",
    component: InputMobile
};

const Template = (args) => <InputMobile {...args}></InputMobile>

export const Light = Template.bind({});
Light.args = {
	width: 600,
	variant: "light",
	placeholder: "This is a placeholder"
}

export const Dark = Template.bind({});
Dark.args = {
	width: 600,
	variant: "dark",
	placeholder: "This is a placeholder"
}

export const Transparent = Template.bind({});
Transparent.args = {
	width: 600,
	variant: "transparent",
	placeholder: "This is a placeholder"
}