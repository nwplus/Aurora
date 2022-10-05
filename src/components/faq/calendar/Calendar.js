import React from 'react';
import styled from "styled-components";
import { CalendarActiveCSS, CalendarInactiveCSS, CalendarTitleCSS, CalendarDesCSS, CalendarTagCSS} from "./CalendarCSS"

import { CalendarTag } from '../../../assets/tag_filled.svg';

// Calendar
const CalendarComponent = (props) => {
    let styles = ""
    // If description is too long, cut it
    const checkDescription = () => {
        let modified_calendar_description = props.description
        if (props.description.length > 64) {
            modified_calendar_description = props.description.substring(0, 64) + " ..."
        }
    
        return modified_calendar_description;
    }
    const calendarStyles = () => {
        // true
        if (props.active) {
            // Active calendar
            styles += `
                ${CalendarActiveCSS}
            `
        }
        // false
        else {
            // Inactive calendar
            styles += `
                ${CalendarInactiveCSS}
            `
        }
        return styles;
    }

    const CalendarComponent = styled.div `
        ${calendarStyles}
    `
    const CalendarTitle = styled.p `
        ${CalendarTitleCSS}
    `
    const CalendarDes = styled.p `
        ${CalendarDesCSS}
    `
    const CalendarTag = styled.div`
        ${CalendarTagCSS}
    `
    return (
        // CalendarDes will disappear if the text inside it is empty
        <CalendarComponent>
            <CalendarTitle>
                {props.title}
                <CalendarTag>
                    <img src={CalendarTag}/>
                </CalendarTag>
            </CalendarTitle>
            <CalendarDes>{props.date}</CalendarDes>
            <CalendarDes>{checkDescription()}</CalendarDes>
        </CalendarComponent>
    )
}

export { CalendarComponent };