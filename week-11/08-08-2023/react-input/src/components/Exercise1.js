import React, {useState} from "react";

const Exercise1 = () => {
    const [person, setPerson] = useState({name: "", age: ""});

    const handleChange = (event, property) => {
        setPerson({...person, [property]: event.target.value});
    };

    const handleButtonClick = () => {
        if (person.name && person.age) {
            alert(`Come in ${person.name}, you’re ${person.age} - that’s good enough`);
            setPerson({name: "", age: ""}); // Очищаем поля ввода
        } else {
            alert("Please enter both name and age");
        }
    };

    return (
        <div>
            <h1>Exercise 1</h1>
            <input
                id = "name-input"
                onChange = {(e) => handleChange(e, "name")}
                value = {person.name}
                placeholder = "Enter your name"
            />
            <input
                id = "age-input"
                onChange = {(e) => handleChange(e, "age")}
                value = {person.age}
                placeholder = "Enter your age"
            />
            <button onClick = {handleButtonClick}>Go to Bar</button>
        </div>
    );
};

export default Exercise1;
