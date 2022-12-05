// App.jsx
import "./App.scss";
import Counter from "./Components/Counter/Counter";
import UserInfo from "./Components/userInfo/UserInfo";
import Data from "../src/Data/data";

const App = () => {
  const teamInfo = Data.map((user) => {
    return <UserInfo name={user.name} role={user.role} />;
  });
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <p>{teamInfo}</p>
        <UserInfo />
      </header>
    </div>
  );
};

export default App;
