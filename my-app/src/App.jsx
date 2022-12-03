// App.jsx
import "./App.scss";
import Counter from "./Components/Counter/Counter";
import Header from "./Components/Header/Header";
import teamData from "../src/Data/data";

const App = () => {
  const teamInfo = teamData.map((user) => {
    return <Header name={user.name} role={user.role} />;
  });
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <p>{teamInfo}</p>
        <Header />
      </header>
    </div>
  );
};

export default App;
