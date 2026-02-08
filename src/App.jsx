import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/navBar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/bookDetails';
import AddBook from './components/addBook';
import NotFound from './components/NotFound';

import './App.css';


function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />

          {/* Browse all books */}
          <Route
            path="/browse"
            element={
              <PageLayout>
                <BrowseBooks />
              </PageLayout>
            }
          />

          {/* Browse books by category */}
          <Route
            path="/books/:category"
            element={
              <PageLayout>
                <BrowseBooks />
              </PageLayout>
            }
          />

          {/* Book details page */}
          <Route
            path="/book/:id"
            element={
              <PageLayout>
                <BookDetails />
              </PageLayout>
            }
          />

          {/* Add new book */}
          <Route
            path="/add-book"
            element={
              <PageLayout>
                <AddBook />
              </PageLayout>
            }
          />

          {/* 404 Page (No Navigation) */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
