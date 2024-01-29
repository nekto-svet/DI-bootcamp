import React, { createContext, useReducer  } from 'react';
import Header from './components/Header';
import Book from './components/Book';
import BookList from './components/BookList';

export const AppContext = createContext();

const initialState = {
  search: '',
  books: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.payload };
    case 'books':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${state.search}`
      );
      const data = await response.json();
      dispatch({ type: 'books', payload: data.items || [] });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (event) => {
    dispatch({ type: 'search', payload: event.target.value });
  };

  const handleSort = () => {
    const sortedBooks = [...state.books].sort((a, b) =>
      a.volumeInfo.publishedDate < b.volumeInfo.publishedDate ? 1 : -1
    );
    dispatch({ type: 'books', payload: sortedBooks });
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          search: state.search,
          handleSearch,
          handleInputChange,
          handleSort,
          books: state.books,
        }}
      >
        <Header />
        <Book />
        <BookList />
      </AppContext.Provider>
    </div>
  );
};

export default App;