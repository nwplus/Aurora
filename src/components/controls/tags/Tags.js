import styled from "styled-components";
import { colors } from "../../colors/Colors";
import { useState } from 'react';

const Tags = (props) => {

    const [selected, setSelected] = useState(props.selected)

    const getBorderColor = (p) => {
        if (!p.active) return `border: 0.5px solid ${colors.grey500};`
        if (p.selectable) {
            if (selected) {return `border: 0.5px solid #4D4D4D;`}
            return `border: 0.5px solid ${colors.grey500};`
        }
        return `border-color: none;`
    };

    const getBackgroundColor = (p) => {
        if (!p.active) { return `background: ${colors.grey200};`}
        if (p.selectable) {
            if (selected) {return `background: ${colors.midnight500};`}
            return `background: transparent;`
        }
        return `background: ${colors.teal400};`
    }
    
    const getTextColor = (p) => {
        if (!p.active) return `color: ${colors.grey500};`
        if (p.selectable) {
            if (selected) {return `color: ${colors.white};`}
            return `color: ${colors.grey500};`
        }
        return `color: ${colors.midnight600};`
    }

    const Tags = styled.div`

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1px 8px;

        position: absolute;
        width: 74px;
        height: 23px;
        left: 20px;
        top: 20px;
        cursor: ${p => p.active && p.selectable ? 'pointer' : 'default'};


        ${(p) => getBackgroundColor(p)}
        border-radius: 4px;
        ${(p) => getTextColor(p)}

        justify-content: center;
        font-family: 'HK Grotesk', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        ${(p) => getBorderColor(p)}

        &:after {
            ${(p) => getBorderColor(p)}
            ${(p) => getTextColor(p)}
            ${(p) => getBackgroundColor(p)}
        }
    `

    return (
        <Tags active={props.active} selectable={props.selectable} selected={selected} onClick={() => setSelected(props.active && props.selectable ? !selected : false)}>
            {props.label}
        </Tags>
    );
};

export { Tags };
