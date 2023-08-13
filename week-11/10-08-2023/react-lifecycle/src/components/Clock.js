import React, {useEffect, useState} from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(new Date());
        };

        const intervalId = setInterval(updateCurrentTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{formattedTime}</p>
        </div>
    );
};

export default Clock;
