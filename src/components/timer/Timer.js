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

const TimeLabels = styled.div`
    ${TimerLabelsCSS}
`;

const TimerComponentContainer = ({isActive, time}) => {
    const [seconds, setSeconds] = useState(time);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    // useCallback prevents getTime() from being recreated at every rerender via caching
    const getTime = useCallback(() => {
        let newTime = seconds - 1;

        setSeconds(newTime % 60);
        setMinutes(Math.floor(newTime / 60) % 60);
        setHours(Math.floor(newTime / 3600) % 24);
        setDays(Math.floor(newTime / 86400));
    }, [seconds]);

    useEffect(() => {
        if (isActive && seconds > 0) {
            // interval is a timer created by setInterval
            const interval = setInterval(() => getTime(), 1000);
    
            return () => clearInterval(interval);
        }
    }, [getTime, seconds, isActive]);

    const formatTime = () => {
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
                <TimeLabels>
                    <p>day</p>
                    <p>hr</p>
                    <p>min</p>
                    <p>sec</p>
                </TimeLabels>
            </TimerContainer>
        </TimerComponent>
    );
};

export { TimerComponentContainer };
