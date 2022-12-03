// App.jsx
import "./App.scss";
import Counter from "./Components/Counter/Counter";

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <Counter />
      </header>
    </div>
  );
};


export default App;