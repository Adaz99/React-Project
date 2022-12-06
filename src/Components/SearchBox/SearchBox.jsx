import "./SearchBox.scss"


const SearchBox = (props) => {
    
    const { handleInput, searchTerm, } = props

  

    return (
        <form >
          <input className="search-box"
            type="text"
            value={searchTerm}
            onChange={handleInput}
          />
        </form>
      );
    };
    
    export default SearchBox;