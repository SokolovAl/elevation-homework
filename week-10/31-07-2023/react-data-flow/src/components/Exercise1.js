const Exercise1 = (props) => {
    return (
        <div>
            <button onClick = {props.shiftImageBack}>Back</button>
            <img src = {props.images[props.currentImg]} alt = {`Image ${props.currentImg}`}/>
            <button onClick = {props.shiftImageForward}>Forward</button>
        </div>
    );
};

export default Exercise1;
