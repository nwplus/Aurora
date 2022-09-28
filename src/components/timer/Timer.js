import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";

import {
  TimerCSS,
  TimerContainerCSS,
  TimerHeadingCSS,
  TimerNumsCSS,
  TimerLabelsCSS
} from "./TimerCSS";

const TimerComponent = styled.div`
    ${TimerCSS}
`;

const TimerContainer = styled.div`
    ${TimerContainerCSS}
`;

const TimerHeading = styled.h1`
    ${TimerHeadingCSS}
`;

const Timer = styled.span`
    ${TimerNumsCSS}
`;

const TimerLabels = styled.div`
    ${TimerLabelsCSS}
`;

const TimerComponentContainer = ({isActive, time}) => {
    const [timeRemaining, setTimeRemaining] = useState(time);
    
    const getTime = useCallback(() => {
        let newTime = timeRemaining - 1;

        setTimeRemaining(newTime);
    }, [timeRemaining]);

    useEffect(() => {
        if (isActive && timeRemaining > 0) {
            const interval = setInterval(() => getTime(), 1000);
    
            return () => clearInterval(interval);
        }
    }, [getTime, timeRemaining, isActive]);

    const formatTime = () => {
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor(timeRemaining / 60) % 60;
        let hours = Math.floor(timeRemaining / 3600) % 24;
        let days = Math.floor(timeRemaining / 86400);

        let res = "";
        
        if (days < 10) {
            res += "0" + days + ":";
        } else {
            res += days + ":"; 
        }
        
        if (hours < 10) {
            res += "0" + hours + ":";
        } else {
            res += hours + ":"; 
        }
        
        if (minutes < 10) {
            res += "0" + minutes + ":";
        } else {
            res += minutes + ":"; 
        }

        if (seconds < 10) {
            res += "0" + seconds;
        } else {
            res += seconds; 
        }

        return res; 
    }

    return (
        <TimerComponent>
            <TimerHeading>HACKING ENDS IN...</TimerHeading>
            <TimerContainer>
                <Timer>{formatTime()}</Timer>
                <TimerLabels>
                    <p>day</p>
                    <p>hr</p>
                    <p>min</p>
                    <p>sec</p>
                </TimerLabels>
            </TimerContainer>
        </TimerComponent>
    );
};

export { TimerComponentContainer };
