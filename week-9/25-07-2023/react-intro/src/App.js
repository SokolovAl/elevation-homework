import "./App.css";

function App() {
    const showCompany = (name, revenue) => {
        return (
            <div id={name}>{name} makes {revenue} every year</div>
        );
    };

    let companies = [
        {name: "Tesla", revenue: 140},
        {name: "Microsoft", revenue: 300},
        {name: "Google", revenue: 600}
    ];

    const getClassName = (temperature) => {
        if (temperature < 15) {
            return "freezing";
        } else if (temperature >= 15 && temperature <= 30) {
            return "fair";
        } else {
            return "hell-scape";
        }
    };

    const temperature = 17;

    return (
        <div className="ex-space">
            <h4 className="ex-title">Exercise 1</h4>
            <div className="exercise" id="ex-1">
                {companies.map(company => showCompany(company.name, company.revenue))}
            </div>
            <br/>
            <br/>
            <br/>
            <h4 className="ex-title">Exercise 2</h4>
            <div className="exercise" id="ex-2">
                <div className={`${getClassName(temperature)}`} id="weatherBox"></div>
            </div>
        </div>
    );
}

export default App;
