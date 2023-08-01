import "./App.css";
import Exercise1 from "./components/Exercise1";
import {useState} from "react";

function App() {

    const data = {
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://agraz-mods.de/hud/hud_fill_parsley.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    };

    const [currentImg, setCurrentImg] = useState(data.currentImg);

    const shiftImageBack = () => {
        setCurrentImg((currentImg) =>
            currentImg === 0 ? data.images.length - 1 : currentImg - 1
        );
    };

    const shiftImageForward = () => {
        setCurrentImg((currentImg) =>
            currentImg === data.images.length - 1 ? 0 : currentImg + 1
        );
    };

    return (
        <div className = "App">
            <h1>Simple Image Gallery</h1>
            <Exercise1 images = {data.images}
                       currentImg = {currentImg}
                       shiftImageBack = {shiftImageBack}
                       shiftImageForward = {shiftImageForward}
            />

        </div>
    );
}

export default App;
