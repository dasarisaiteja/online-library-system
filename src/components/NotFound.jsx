import { Link, useLocation } from 'react-router-dom';
import './notFound.css';

function NotFound() {

  // Get current URL location
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="not-found-container">

        <div className="error-code">404</div>

        <h1 className="error-title">Page Not Found</h1>

        <p className="error-message">
          The page you're looking for doesn't exist in our library.
        </p>

        {/* Show invalid URL */}
        <div className="invalid-route">
          <span className="route-label">Invalid URL:</span>
          <code className="route-path">{location.pathname}</code>
        </div>

        <div className="error-illustration">
          <div className="book-stack">
            <div className="book book-1">📕</div>
            <div className="book book-2">📗</div>
            <div className="book book-3">📘</div>
          </div>
        </div>

        {/* Back to Home */}
        <Link to="/" className="home-link">
          ← Return to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
