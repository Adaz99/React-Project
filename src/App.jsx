// App.jsx
import "./App.scss";
import Data from "../src/Data/data";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState } from "react";
import Users from "./Components/Users/Users";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState("");

  // create a function that handles the search term (user)
  const handleInput = (event) => {
    // clean the input before we pass it to setSearchTerm, make it all lowercase
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);

    const filtered = Data.filter((users) => {
      // clean the input before we pass it to setSearchTerm, make it all lowercase
      const usersLowerCae = users.name.toLowerCase();
      // If a name matches it will display on screen if not it will display all users
      return usersLowerCae.includes(searchTerm) && users;
    });
    setFiltered(filtered);
  };
  return (
    <div className="App">
      <header className="greeting">
        <h1 className="App__heading">Ticket Tracker</h1>
        <div className="App__SearchBox" >
        <SearchBox handleInput={handleInput} />
        </div>
        <div className="App__tickets">
          <Users users={filtered.length > 0 ? filtered : Data} />
        </div>
      </header>
    </div>
  );
};

export default App;
