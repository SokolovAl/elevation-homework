import "./App.css";
import Hudini from "./components/Hudini";
import {useState} from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";

function App() {

    const data = {
        user: "Robyn",
        store: [
            {item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false},
            {item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false},
            {item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true}
        ],
        shouldDiscount: true,
        currentPage: "Landing"
    };

    const [state, setState] = useState(data);

    const changePage = (page) => {
        setState({...state, currentPage: page});
    };

    return (
        <div id = "root">
            <h1>Exercise 1</h1>
            <div>
                <Hudini/>
            </div>
            <br/>

            <h1>Exercise 2</h1>
            <div>
                <Landing user = {state.user} hottestItem = {state.store.find((item) => item.hottest)}/>
                <hr/>
                <h4>Store</h4>
                <Home store = {state.store}/>
            </div>
            <br/>

            <h1>Exercise 3</h1>
            <div>
                {state.currentPage === "Landing" ? (
                    <Landing user = {state.user} hottestItem = {state.store.find((item) => item.hottest)}/>) : (
                    <Home store = {state.store}/>)}
                <button onClick = {() => changePage("Landing")}>Go to Landing</button>
                <button onClick = {() => changePage("Home")}>Go to Home</button>
            </div>
            <br/>

            <h1>Exercise 4</h1>
            <div>
                {state.currentPage === "Landing" ? (
                    <Landing user = {state.user} hottestItem = {state.store.find((item) => item.hottest)}/>) : (
                    <Home store = {state.store} shouldDiscount = {state.shouldDiscount}/>)}
                <button onClick = {() => changePage("Landing")}>Go to Landing</button>
                <button onClick = {() => changePage("Home")}>Go to Home</button>
            </div>
        </div>
    );
}

export default App;
