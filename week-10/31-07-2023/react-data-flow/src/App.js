import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2_7 from "./components/Exercise2_7";

function App() {

    const dataForExercise1 = {
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://agraz-mods.de/hud/hud_fill_parsley.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    };

    const dataForExercise2 = {
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    {text: "Hi", sender: "self"},
                    {text: "You there?", sender: "self"},
                    {text: "Yeah, hi, what's up?", sender: "other"}
                ]
            },
            {
                with: "Dad", convo: [
                    {text: "Have you finished your school work yet?", sender: "other"},
                    {text: "Yes.", sender: "self"},
                    {text: "What do you mean, yes?", sender: "other"},
                    {text: "??", sender: "self"}
                ]
            },
            {
                with: "Shoobert", convo: [
                    {text: "Shoobert!!!", sender: "self"},
                    {text: "Dude!!!!!!!!", sender: "other"},
                    {text: "Shooooooooo BERT!", sender: "self"},
                    {text: "You're my best friend", sender: "other"},
                    {text: "No, *you're* my best friend", sender: "self"}
                ]
            }
        ]
    };

    return (
        <div className = "App">
            <div>
                <h1>Exercise 1</h1>
                <Exercise1 images = {dataForExercise1.images} currentImg = {dataForExercise1.currentImg}/>
            </div>
            <br/>

            <div>
                <h1>Exercises 2-7</h1>
                <Exercise2_7 data = {dataForExercise2}/>
            </div>

        </div>
    );
}

export default App;
