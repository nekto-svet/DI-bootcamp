import { useContext } from "react";
import { AppContext } from "../App";
const Book = () => {
    const { search, onInputChange, onSearch, onSort } = useContext(AppContext);
  return (
    <div>
      <input type="text" value={search} onChange={onInputChange} />
      <button onClick={onSearch}>Search</button>
      <button onClick={onSort}>Sort by Newest</button>
    </div>
  );
};

export default Book;
