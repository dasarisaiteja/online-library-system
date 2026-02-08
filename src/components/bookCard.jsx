import { Link } from 'react-router-dom';
import './bookCard.css';

function BookCard(props) {
  const book = props.book;

  return (
    <div className="book-card">
      <div className="book-card-header">
        <span className="book-category">{book.category}</span>
        <span className="book-rating">⭐ {book.rating}</span>
      </div>

      <div className="book-card-body">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">
          {book.description.substring(0, 120)}...
        </p>
      </div>

      <div className="book-card-footer">
        <Link to={`/book/${book.id}`} className="view-details-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
