import React from "react";
import Spam from "./Spam";

const Spamalot = () => {
    const numberOfSpamItems = 500;
    const spams = Array.from({length: numberOfSpamItems}, (_, index) => <Spam key={index}/>);

    return (
        <div id="ex-2">
            {spams}
        </div>
    );
};

export default Spamalot;
