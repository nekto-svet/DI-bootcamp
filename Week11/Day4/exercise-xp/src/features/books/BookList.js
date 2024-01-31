import { useDispatch, useSelector } from "react-redux"
import { selectBook, selectHorrorBooks, selectFantasyBooks,selectScienceFictionBooks } from "./bookSlice";


const BookList = () => {
const books = useSelector(state => state.books);
const dispatch = useDispatch();


return (
    <div>
        <h3>Books</h3>
        <div>
        <button onClick={()=>dispatch(selectBook())}>All</button>
        <button onClick={()=>dispatch(selectHorrorBooks())}>Horrors</button>
        <button onClick={()=>dispatch(selectFantasyBooks())}>Fantasy</button>
        <button onClick={()=>dispatch(selectScienceFictionBooks())}>ScienceFiction</button>
        </div>
        <div>
            {books.map(book => {
                return <div key = {book.id}>
                    <h3>{book.title}</h3>
                    <div>{book.author}</div>
                    <div>{book.genre}</div>
                </div>
            })}
        </div>
    </div>
)
}

export default BookList;