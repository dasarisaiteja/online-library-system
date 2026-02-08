import { useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './bookDetails.css';

function BookDetails() {

  // Get book ID from URL
  const params = useParams();
  const id = params.id;

  // Navigation function
  const navigate = useNavigate();

  // Get books array from Redux store
  const books = useSelector(function (state) {
    return state.books.books;
  });

  // Find the book using ID
  const book = books.find(function (b) {
    return b.id === parseInt(id);
  });

  // If book does not exist
  if (!book) {
    return (
      <div className="book-details-page">
        <div className="book-not-found">
          <div className="error-icon">📚</div>
          <h2>Book Not Found</h2>
          <p>The book you're looking for doesn't exist in our library.</p>
          <Link to="/browse" className="back-button">
            ← Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  // Handle back button click
  function handleBack() {
    navigate('/browse');
  }

  return (
    <div className="book-details-page">

      {/* Back Button */}
      <button onClick={handleBack} className="back-button">
        ← Back to Browse
      </button>

      {/* Book Details Card */}
      <div className="book-details-card">
        <div className="book-details-header">
          <div className="book-meta">
            <span className="book-category-badge">{book.category}</span>
            <span className="book-rating-large">
              ⭐ {book.rating} / 5.0
            </span>
          </div>
        </div>

        <div className="book-details-content">

          {/* NEW: Book Image and Info Layout */}
          <div className="book-main-section">
            
            {/* Book Image */}
            <div className="book-image-container">
              {book.image ? (
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="book-cover-image"
                />
              ) : (
                <div className="book-placeholder">
                  <span className="placeholder-icon">📖</span>
                  <p>No Image Available</p>
                </div>
              )}
              
              {/* Optional: Show price if available */}
              {book.price && (
                <div className="book-price">
                  ₹{book.price}
                </div>
              )}
            </div>

            {/* Book Information */}
            <div className="book-info-section">
              <h1 className="book-title-large">{book.title}</h1>

              <p className="book-author-large">
                <span className="author-label">by</span> {book.author}
              </p>

              <div className="book-description-section">
                <h3 className="section-heading">About This Book</h3>
                <p className="book-description-full">{book.description}</p>
              </div>
            </div>
          </div>

          {/* Book Details Grid */}
          <div className="book-info-grid">
            <div className="info-item">
              <span className="info-label">Category</span>
              <span className="info-value">{book.category}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Rating</span>
              <span className="info-value">{book.rating} ⭐</span>
            </div>

            <div className="info-item">
              <span className="info-label">Author</span>
              <span className="info-value">{book.author}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value">
                {book.popular ? '🔥 Popular' : '📚 Available'}
              </span>
            </div>
          </div>

          <div className="action-buttons">
            <Link to={`/books/${book.category}`} className="category-link-btn">
              More {book.category} Books
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookDetails;