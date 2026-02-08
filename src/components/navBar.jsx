import { NavLink } from 'react-router-dom';
import './navBar.css';

function Navigation() {

  // Function to set active class for NavLink
  function getActiveClass(navData) {
    if (navData.isActive) {
      return 'active';
    }
    return '';
  }

  return (
    <nav className="navigation">
      <div className="nav-container">

        {/* FIXED: Changed brand text to match actual site name */}
        <div className="nav-brand">
          <NavLink to="/">
            <span className="brand-icon">📚</span>
            <span className="brand-text">Online Library</span>
          </NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={getActiveClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/browse" className={getActiveClass}>
              Browse Books
            </NavLink>
          </li>

          <li>
            <NavLink to="/add-book" className={getActiveClass}>
              Add Book
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navigation;