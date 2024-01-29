import { useContext } from "react";
import { AppContext } from "../App";
const Book = () => {
    const { search, handleInputChange, handleSearch, handleSort } = useContext(AppContext);
  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSort}>Sort by Newest</button>
    </div>
  );
};

export default Book;
