import styled from "styled-components";

import { colors } from "../colors/index";
import { 
    InputLongAnswerCSS,
    InputCSS,
    ErrorMessageCSS 
} from "./InputLongAnswerCSS";

const InputLongAnswerComponent = (props) => {
    const getInputVariantStyles = (p) => {
        const isFilledState = `
        color: ${colors.emerald400};  
        &:focus {
            border-color: ${colors.emerald400};
        }
        `;
        const errorState = `
        border: 0.25rem solid ${colors.red500};
        &:focus {
            border: 0.25rem solid ${colors.red500};
        }
        `;

        let styles = "";

        if (p.isFilled) {
            styles += isFilledState;
        }

        if (p.aboveCharLimit || p.noAnswer) {
            styles += errorState;
        }

        return styles;
    }

    const InputLongAnswer = styled.div`
        ${InputLongAnswerCSS}
    `;

    const Input = styled.textarea`
        ${InputCSS}
        ${(p) => getInputVariantStyles(p)}
    `;

    const ErrorMessage = styled.span`
        ${ErrorMessageCSS}
    `;

    return (
        <InputLongAnswer isFilled={props.isFilled} aboveCharLimit={props.aboveCharLimit} noAnswer={props.noAnswer}>
            <Input isFilled={props.isFilled} aboveCharLimit={props.aboveCharLimit} noAnswer={props.noAnswer}>
                Maximum of 650 characters
            </Input>
            { props.aboveCharLimit &&  
                <ErrorMessage>
                    Looks like you're above 650 characters! Try again. 
                </ErrorMessage>
            }
            { props.noAnswer &&  
                <ErrorMessage>
                    Please enter your answer! 
                </ErrorMessage>
            }
        </InputLongAnswer>
    );
};

export { InputLongAnswerComponent };