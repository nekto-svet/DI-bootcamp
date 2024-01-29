
const BookCard = (props) => {
    const { book } = props;
    const info = book.volumeInfo;
  return (
    <div>
      <img src={info.imageLinks.thumbnail} alt={info.title} />
      <h3>Title: {info.title}</h3>
      <p>Author: {info.authors}</p> 
      <p>Published Year: {info.publishedDate}</p>
    </div>
  );
};

export default BookCard;