import './App.css';
import Addition from './components/Addition'

function App() {

    const first = 1
    const second = 2

  return (
    <div className="App">
      <Addition first={first} second={second} />
    </div>
  );
}

export default App;
