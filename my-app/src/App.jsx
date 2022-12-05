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


      const filtered = Data.filter(users => {
         // clean the input before we pass it to setSearchTerm, make it all lowercase
        const usersLowerCae = users.name.toLowerCase()
        // If a name matches it will display on screen if not it will display all users
        return usersLowerCae.includes(searchTerm) && users
      }) 
      setFiltered(filtered)
    };
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <SearchBox handleInput={handleInput}/>
        <div className="tickets">
          {filtered.length > 0 ? <Users users={filtered} />: <Users users={Data} />} 
          {/* <Users users={filtered.length > 0 ? filtered: Data}/> */}
        </div>
        
      </header>
    </div>
  );
};


export default App;
