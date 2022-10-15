import { useState } from 'react';
import styled from 'styled-components';

import { colors } from "../../colors/index";

const Radial = (props) => {

    const [checked, setChecked] = useState(props.checked)

    const getBorderColor = (p) => {
        if (!p.active) return `border-color: ${colors.grey600};`
        if (checked) return `border-color: ${colors.emerald400};`
        return `border-color: white;`
    };

    const Radial = styled.div`
        height: 23px;
        width: 23px;
        border: 3px solid;
        border-radius: 100%;
        cursor: ${p=>p.active ? 'pointer' : 'default'};
        background: transparent;
        position: relative;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: all 0.13s linear;
        ${(p) => getBorderColor(p)}

        &:hover {
            border-color: ${colors.emerald400};
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            border-radius: 100%;
            height: 81%;
            width: 81%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            background-color: ${colors.emerald400};
            opacity: ${p => p.checked && p.active ? '1' : '0'};
            transition: opacity 1s; 
        }
    `

    return (
        <Radial 
          checked={checked} 
          active={props.active} 
          onClick={()=>setChecked(props.active ? !checked : false)}>
        </Radial>
    )
}

export { Radial }