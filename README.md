# 📚 Online Library System

A modern, full-featured online library management system built with React, Redux, and React Router.

---

## 🎯 Project Overview

This is a React-based web application that allows users to browse books by category, view detailed book information, search for books, and add new books to the library collection.

---

## ✨ Features

### 1. **Home Page**
- Welcome message with hero section
- Browse books by category (Fiction, Non-Fiction, Sci-Fi, Horror)
- Display popular books in card format
- Responsive navigation bar

### 2. **Browse Books Page**
- View all books or filter by category
- Dynamic routing: `/books/:category`
- Search functionality (filter by title or author)
- Real-time search results counter
- Responsive grid layout

### 3. **Book Details Page**
- Dynamic routing: `/book/:id`
- Display complete book information:
  - Title and author
  - Book cover image
  - Category and rating
  - Full description
  - Price (if available)
- "Back to Browse" button
- "More [Category] Books" link

### 4. **Add Book Page**
- Form to add new books with validation
- Fields: Title, Author, Category, Rating, Description, Image URL, Price
- Redux state management
- Form validation with error messages
- Redirects to Browse page after submission
- New book appears at the top of the list

### 5. **404 Page**
- Custom "Page Not Found" design
- Displays invalid URL path
- Link back to home page
- No navigation bar (as per requirements)

---

## 🛠️ Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **CSS3** - Styling with custom variables and gradients

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/online-library.git
cd online-library
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```


---

## 📂 Project Structure

```
online-library/
├── src/
│   ├── components/
│   │   ├── navBar.jsx              # Navigation bar component
│   │   ├── navBar.css
│   │   ├── home.jsx                # Home page
│   │   ├── home.css
│   │   ├── browseBook.jsx          # Browse books page
│   │   ├── browseBook.css
│   │   ├── bookCard.jsx            # Reusable book card component
│   │   ├── bookCard.css
│   │   ├── bookDetails.jsx         # Book details page
│   │   ├── bookDetails.css
│   │   ├── addBooks.jsx            # Add book form page
│   │   ├── addBooks.css
│   │   ├── notFound.jsx            # 404 error page
│   │   └── notFound.css
│   ├── utils/
│   │   ├── booksData.js            # Initial books data
│   │   ├── booksSlice.js           # Redux slice for books
│   │   └── store.js                # Redux store configuration
│   ├── App.jsx                      # Main app component with routing
│   ├── App.css                      # Global app styles
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global CSS reset
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔗 Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with categories and popular books |
| `/browse` | BrowseBooks | All books display |
| `/books/:category` | BrowseBooks | Books filtered by category |
| `/book/:id` | BookDetails | Individual book details |
| `/add-book` | AddBook | Form to add new book |
| `*` | NotFound | 404 error page |

---

## 🎨 Key Features Implementation

### Redux State Management
```javascript
// Store structure
{
  books: {
    books: [ /* array of book objects */ ]
  }
}

// Available actions
- addBook(bookData) // Adds new book to the beginning of the list
```

### Form Validation
- Title: Required, minimum 2 characters
- Author: Required, minimum 2 characters
- Category: Required (dropdown selection)
- Rating: Required, must be between 0 and 5
- Description: Required, minimum 20 characters
- Image URL: Optional, must be valid URL format
- Price: Optional, must be positive number

### Search Functionality
- Real-time filtering as you type
- Searches both book titles and author names
- Case-insensitive matching
- Works with category filtering


github link : https://github.com/dasarisaiteja/online-library-system