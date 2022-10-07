import React from 'react';
import styled from "styled-components";
import { CalendarActiveCSS, CalendarInactiveCSS, CalendarTitleCSS, CalendarTagCSS} from "./CalendarCSS"

import CalendarTagImage from '../../../assets/tag_filled.svg';

const CalendarTitle = styled.p `
    ${CalendarTitleCSS}
`

// Calendar
const CalendarComponent = ({description, active, title, date}) => {
    let styles = ""
    // If description is too long, cut it
    const checkDescription = () => {
        let modified_calendar_description = description
        if (description.length > 64) {
            modified_calendar_description = description.substring(0, 64) + " ..."
        }
    
        return modified_calendar_description;
    }
    const calendarStyles = () => {
        // true
        if (active) {
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

    // Tag image should not be visible for inactive calendars
    const TagVisibility = () => {
        let tagstyles = ""
        // false
        if (!active) {
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
                {title}
                <CalendarTag>
                    <img src={CalendarTagImage}/>
                </CalendarTag>
            </CalendarTitle>
            <p>{date}</p>
            <p>{checkDescription()}</p>
        </CalendarComponent>
    )
}

export { CalendarComponent };