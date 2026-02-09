import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from './bookCard.jsx';
import { categories } from '../utils/BooksData.js';
import './home.css';

function Home() {

  // Get books from Redux store
  const books = useSelector(function (state) {
    return state.books.books;
  });

  // Get only popular books
  const popularBooks = books.filter(function (book) {
    return book.popular;
  });

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Online Library</span>
          </h1>

          <p className="hero-subtitle">
            Discover your next favorite book from our curated collection spanning multiple genres
          </p>

          <Link to="/browse" className="cta-button">
            Explore Library
          </Link>
        </div>

        <div className="hero-decoration">
          <div className="floating-book">📖</div>
          <div className="floating-book delay-1">📕</div>
          <div className="floating-book delay-2">📗</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Browse by Category</h2>

        <div className="categories-grid">
          {categories.map(function (category, index) {
            return (
              <Link
                key={index}
                to={`/books/${category}`}
                className="category-card"
              >
                <div className="category-icon">
                  {category === 'Fiction' && '📚'}
                  {category === 'Non-Fiction' && '📖'}
                  {category === 'Sci-Fi' && '🚀'}
                  {category === 'Horror' && '☠️'}
                </div>

                <h3 className="category-name">{category}</h3>

                <p className="category-count">
                  {
                    books.filter(function (book) {
                      return book.category === category;
                    }).length
                  } books
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <h2 className="section-title">Popular Books</h2>

        <p className="section-subtitle">
          Check out our most loved books by readers worldwide
        </p>

        <div className="books-grid">
          {popularBooks.map(function (book) {
            return <BookCard key={book.id} book={book} />;
          })}
        </div>
      </section>

    </div>
  );
}

export default Home;
