import styled from 'styled-components';

// import { colors } from "../colors/index";

import {
    ControlCSS
} from "./checkboxCSS";

// Checkbox
const inactiveCheckbox = `background-color: #ccc;`

const Checkbox = (props) => {
    const getVariantStyles = (p) => {
        let styles = ""

        switch(p.variant) {
            case "control":
                styles += p.active ? `
                ${ControlCSS}
            ` : inactiveCheckbox
            break;
            
        }
        return styles
    }

    const Checkbox = styled.div`
        ${(p) => getVariantStyles(p)}
    `;

    const CheckboxCSS = styled.div `
        ${(p) => getVariantStyles(p)}
    `
    return (
        <Checkbox variant={props.variant}>
            <input style={{borderColor: "red"}} type="checkbox"></input>
        </Checkbox>
    );
}

export { Checkbox }