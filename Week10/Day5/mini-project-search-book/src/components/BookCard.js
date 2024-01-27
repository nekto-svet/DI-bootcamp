
const BookCard = ({ book }) => {
    const { volumeInfo } = book;
  return (
    <div>
      <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
      <h3>{volumeInfo.title}</h3>
      <p>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
      <p>Published Year: {volumeInfo.publishedDate}</p>
    </div>
  );
};

export default BookCard;