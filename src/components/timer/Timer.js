import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";

import {
  TimerCSS,
  TimerContainerCSS
} from "./TimerCSS";

const TimerComponent = styled.div`
    ${TimerCSS}
`;

const TimerContainer = styled.div`
    ${TimerContainerCSS}
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

    return (
        <TimerComponent>
            <h1>HACKING ENDS IN...</h1>
            <TimerContainer>
                <div>
                    <div className="box">
                    <p id="day">{days < 10 ? "0" + days : days}</p>
                    <span className="text">day</span>
                    </div>
                </div>
                <div>
                    <div className="box">
                    <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
                    <span className="text">hour</span>
                    </div>
                </div>
                <div>
                    <div className="box">
                    <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span className="text">min</span>
                    </div>
                </div>
                <div>
                    <div className="box">
                    <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                    <span className="text">sec</span>
                    </div>
                </div>
            </TimerContainer>
        </TimerComponent>
    );
};

export { TimerComponentContainer };
