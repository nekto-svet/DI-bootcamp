import { useContext } from "react";
import { AppContext } from "../App";
import BookCard from './BookCard';

const BookList = () => {
    const { books } = useContext(AppContext);
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
