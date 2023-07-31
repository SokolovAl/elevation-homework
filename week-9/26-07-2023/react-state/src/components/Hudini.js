import {useState} from "react";

const Hudini = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show ? "Now you see me" : "Now you don’t"}
            <button onClick = {() => setShow(!show)}>Toggle</button>
        </div>
    );
};

export default Hudini;
