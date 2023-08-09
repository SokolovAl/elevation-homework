import {useState} from "react";

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleFruitChange = (e) => {
        const selectedFruit = e.target.value;
        setFruit(selectedFruit);
        console.log(`${name} selected ${selectedFruit}`);
        setName("");
    };

    return (
        <div>
            <h1>Exercise 2</h1>
            <input id = "name-input"
                   onChange = {(e) => setName(e.target.value)}
                   value = {name}
                   placeholder = "Enter your name"
            />
            <select id = "select-input" onChange = {handleFruitChange} value = {fruit}>
                <option>Select a fruit</option>
                <option value = "apple">Apple</option>
                <option value = "banana">Banana</option>
                <option value = "orange">Orange</option>
                <option value = "grape">Grape</option>
            </select>
        </div>
    );
};

export default Exercise2;
