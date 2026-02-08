import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/bookCard';
import './browseBook.css';

function BrowseBooks() {

  // Get category from URL params
  const params = useParams();
  const category = params.category;

  // Get books from Redux store
  const books = useSelector(function (state) {
    return state.books.books;
  });

  // Search text state
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered books state
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Effect to filter books
  useEffect(function () {
    let result = books;

    // Filter by category
    if (category) {
      result = result.filter(function (book) {
        return book.category === category;
      });
    }

    // Filter by search query (title or author)
    if (searchQuery.trim() !== '') {
      result = result.filter(function (book) {
        return (
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    setFilteredBooks(result);

  }, [category, searchQuery, books]);

  // Handle search input
  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  // Clear search
  function clearSearch() {
    setSearchQuery('');
  }

  return (
    <div className="browse-page">

      {/* Page Header */}
      <div className="browse-header">
        <h1 className="page-title">
          {category ? category + ' Books' : 'Browse All Books'}
        </h1>

        <p className="page-subtitle">
          {category
            ? 'Explore our collection of ' + category.toLowerCase() + ' books'
            : 'Discover books from all categories'
          }
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />

          {searchQuery !== '' && (
            <button
              className="clear-search"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Books Grid */}
      <div className="books-container">

        {filteredBooks.length > 0 ? (
          <>
            <p className="results-count">
              {filteredBooks.length}
              {filteredBooks.length === 1 ? ' book' : ' books'} found
            </p>

            <div className="books-grid">
              {filteredBooks.map(function (book) {
                return <BookCard key={book.id} book={book} />;
              })}
            </div>
          </>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">📚</div>
            <h3>No books found</h3>

            <p>
              {searchQuery !== ''
                ? 'No books match "' + searchQuery + '". Try a different search term.'
                : category
                  ? 'No books available in the ' + category + ' category yet.'
                  : 'No books available in the library.'
              }
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default BrowseBooks;
