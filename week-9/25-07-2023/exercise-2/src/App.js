import "./App.css";

function App() {
    const getClassName = (temperature) => {
        if (temperature < 15) {
            return 'freezing';
        } else if (temperature >= 15 && temperature <= 30) {
            return 'fair';
        } else {
            return 'hell-scape';
        }
    };

    const temperature = 17;

    return (
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 2</h4>
            <div className="exercise" id="ex-2">
                <div className={`${getClassName(temperature)}`} id="weatherBox"></div>
            </div>
        </div>
    );
}

export default App;
