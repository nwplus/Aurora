import styled from 'styled-components';

// import { colors } from "../colors/index";

import {
    Control
} from "./checkboxCSS";

const Checkbox = (props) => {
    const getVariantStyles = (p) => {
        let styles = ""

        switch(p.variant) {
            case "control":
                alert("test")
        }

        return styles
    }

    const Checkbox = styled.div`
        ${CheckboxCSS}
    `;

    return (
        <Checkbox variant={props.variant}></Checkbox>
    );
}

export { Checkbox }