import {useState} from "react";

const Exercise1 = ({images, currentImg}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentImg);

    const shiftImageBack = () => {
        setCurrentImageIndex((currentIndex) =>
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    const shiftImageForward = () => {
        setCurrentImageIndex((currentIndex) =>
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <div>
            <button onClick = {shiftImageBack}>Back</button>
            <img src = {images[currentImageIndex]} alt = {`Image ${currentImageIndex}`}/>
            <button onClick = {shiftImageForward}>Forward</button>
        </div>
    );
};

export default Exercise1;
