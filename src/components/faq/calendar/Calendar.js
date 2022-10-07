import React from 'react';
import styled from "styled-components";
import { CalendarActiveCSS, CalendarInactiveCSS, CalendarTitleCSS, CalendarTagCSS} from "./CalendarCSS"

import CalendarTagImage from '../../../assets/tag_filled.svg';

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
            return {CalendarActiveCSS};
            
        }
        // false
        else {
            // Inactive calendar
            return {CalendarInactiveCSS};
            
        }
    }

    const CalendarComponent = styled.div `
        ${calendarStyles}
    `
    const CalendarTitle = styled.p `
        ${CalendarTitleCSS}
    `
    // Tag image should not be visible for inactive calendars
    const TagVisibility = () => {
        let tagstyles = ""
        // false
        if (!props.active) {
            // Active calendar
            tagstyles += `
                display:none;
            `
        }
        return tagstyles;
    }
 
    const CalendarTag = styled.div`
        ${CalendarTagCSS}
        ${TagVisibility()}
    `
    return (
        // CalendarDes will disappear if the text inside it is empty
        <CalendarComponent>
            <CalendarTitle>
                {props.title}
                <CalendarTag>
                    <img src={CalendarTagImage}/>
                </CalendarTag>
            </CalendarTitle>
            <p>{props.date}</p>
            <p>{checkDescription()}</p>
        </CalendarComponent>
    )
}

export { CalendarComponent };