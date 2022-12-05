import "./SearchBox.scss"


const SearchBox = (props) => {
    
    const { Role, handleInput, searchTerm, } = props

  

    return (
        <form className="search-box">
          <input
            type="text"
            role={Role}
            value={searchTerm}
            onChange={handleInput}
            className="search-box__input"
          />
        </form>
      );
    };
    
    export default SearchBox;