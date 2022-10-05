import { colors } from "../../colors/index";

export const CalendarActiveCSS =  `
    padding: 10px 20px;
    /* Midnight (Purple)/midnight-500 */

    background: ${colors.midnight500};
    border-radius: 6px;
    display: inline-block;
    color: ${colors.white};
    text-align: left;
    font-family: "", sans-serif;
    width: 250px;
`

export const CalendarSmallCSS =  `
    
`

export const CalendarInactiveCSS =  `
    padding: 10px 20px;
    /* Red/red-500 */
    outline: ${colors.red500} 2px solid;
    border-radius: 6px;
    display: inline-block;
    color: ${colors.red500};
    text-align: left;
    font-family: "", sans-serif;
    width: 250px;
`

export const CalendarTitleCSS = `
    font-weight: bold;
`

export const CalendarDesCSS = `
    
`