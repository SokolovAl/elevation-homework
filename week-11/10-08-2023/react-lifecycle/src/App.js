import "./style/App.css";
import Clock from "./components/Clock";
import Posts from "./components/Posts";

function App() {
    return (
        <div className = "App">
            <Clock/>
            <Posts/>
        </div>
    );
}

export default App;
