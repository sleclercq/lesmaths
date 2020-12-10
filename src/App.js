import './App.css';
import Operations from "./components/Operations";

function App() {
    const operations = [
        {
            first: 1,
            second: 2
        },
        {
            first: 3,
            second: 4
        }
    ]

  return (
    <div className="App">
      <Operations operations={operations} />
    </div>
  );
}

export default App;
