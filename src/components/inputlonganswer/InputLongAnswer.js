import styled from "styled-components";
import React, { useState, useEffect } from 'react';

import { colors } from "../colors/index";
import { 
    InputLongAnswerCSS,
    InputCSS,
    ErrorMessageCSS 
} from "./InputLongAnswerCSS";

const InputLongAnswerComponent = (props) => {
    const [text, setText] = useState('');
    const [errorText, setErrorText] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value); 
    };

    useEffect(() => {
        let longAnswerComponent = document.getElementById('input-long-component');

        if (props.isEmpty) {
            setErrorText("Please enter your answer!");
        } else if (text.length > 650) {
            setErrorText("Looks like you're above 650 characters! Try again.");
            longAnswerComponent.style.borderColor = `${colors.red500}`;
        } else {
            setErrorText("");
        }
    }, [text, props]);

    const getInputStateStyles = (p) => {
        const isFilledState = `
        color: ${colors.emerald400};  
        &:focus {
            border-color: ${colors.emerald400};
        }
        `;
        const errorState = `
        border: 0.25rem solid ${colors.red500};
        `;

        let styles = "";

        if (!p.isEmpty) {
            styles += isFilledState;
        } else {
            styles += errorState; 
        }

        return styles;
    }

    const InputLongAnswer = styled.div`
        ${InputLongAnswerCSS}
    `;

    const Input = styled.textarea`
        ${InputCSS}
        ${(p) => getInputStateStyles(p)}
    `;

    const ErrorMessage = styled.span`
        ${ErrorMessageCSS}
    `;

    return (
        <InputLongAnswer isEmpty={props.isEmpty}>
            <Input id='input-long-component' isEmpty={props.isEmpty} placeholder='Maximum of 650 characters' defaultValue={text} onChange={changeHandler}>
            </Input>
            <ErrorMessage isEmpty={props.isEmpty}>
                {errorText}
            </ErrorMessage>
        </InputLongAnswer>
    );
};

export { InputLongAnswerComponent };