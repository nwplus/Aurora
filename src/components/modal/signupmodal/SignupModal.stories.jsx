import React from "react";

import { SignupModalContainer } from "./SignupModal";

export default {
    title: 'Example/Modal/SignupModal',
    component: SignupModalContainer,
    argTypes: {
        onSubscribeClick: {
            description: 'onClick event when clicking the Subscribe button on the modal',
        },
        onCloseClick: {
            description: 'onClick event when clicking the close button on the modal',
        },
    },
};

const Template = (args) => <SignupModalContainer {... args} />

export const SignupModal = Template.bind({});
SignupModal.args = {
    onSubscribeClick: () => {},
    onCloseClick: () => {}
}