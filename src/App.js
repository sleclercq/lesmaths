import './App.css';
import Operations from "./components/Operations";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOperations(quantity) {
    return Array.from({length: quantity * 10},
            () => ({first: getRandomInt(1, 9),
                second: getRandomInt(1, 9)}))
            .filter(op => (op.first + op.second >= 10))
            .slice(0, quantity)
}

function App() {
    return (
            <div className="App">
                <div className="row">
                    <div className="column">
                        <Operations operations={generateOperations(25)} />
                    </div>
                    <div className="column">
                        <Operations operations={generateOperations(25)} />
                    </div>
                </div>
            </div>
    );
}

export default App;
