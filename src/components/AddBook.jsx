import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addBook } from '../utils/booksSlice';
import { categories } from '/Users/dasarisaiteja/Desktop/intenshala/online library system/vite-project/src/utils/BooksData.js';

import './addBooks.css';

function AddBook() {

  /* ---------------- Redux & Router ---------------- */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* ---------------- Form State ---------------- */
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    image: '',      
    price: ''       
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------- Handle Input Change ---------------- */
  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue
    });

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors({
        ...errors,
        [fieldName]: ''
      });
    }
  }

  /* ---------------- Form Validation (IMPROVED) ---------------- */
  function validateForm() {
    const newErrors = {};

    // Title validation - improved to check for spaces-only input
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 2) {
      newErrors.title = 'Title must be at least 2 characters';
    }

    // Author validation - improved to check for spaces-only input
    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required';
    } else if (formData.author.trim().length < 2) {
      newErrors.author = 'Author name must be at least 2 characters';
    }

    // Category validation
    if (formData.category === '') {
      newErrors.category = 'Please select a category';
    }

    // Description validation - improved to check for spaces-only input
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    // Rating validation
    if (formData.rating === '') {
      newErrors.rating = 'Rating is required';
    } else {
      const ratingValue = Number(formData.rating);
      if (ratingValue < 0 || ratingValue > 5) {
        newErrors.rating = 'Rating must be between 0 and 5';
      }
    }

    // Image URL validation (IMPROVED)
    if (formData.image.trim() !== '') {
      // Check if it looks like a URL
      if (!formData.image.startsWith('http://') && !formData.image.startsWith('https://')) {
        newErrors.image = 'Image URL must start with http:// or https://';
      }
      // Check if URL ends with image extension
      else if (!formData.image.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i)) {
        newErrors.image = 'Please use a valid image URL (.jpg, .png, .gif, .webp, etc.)';
      }
    }

    // Price validation
    if (formData.price !== '') {
      const priceValue = Number(formData.price);
      if (priceValue < 0) {
        newErrors.price = 'Price cannot be negative';
      }
    }

    return newErrors;
  }

  /* ---------------- Handle Form Submit ---------------- */
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const newBook = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category,
      description: formData.description.trim(),
      rating: Number(formData.rating),
      image: formData.image.trim() || undefined,        
      price: formData.price ? Number(formData.price) : undefined,  
      popular: false
    };

    dispatch(addBook(newBook));

    setTimeout(function () {
      navigate('/browse');
    }, 500);
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="add-book-page">
      <div className="add-book-container">

        <h1>Add New Book</h1>
        <p>Contribute to our library by adding a new book</p>

        <form onSubmit={handleSubmit}>

          {/* ===== TITLE INPUT - FIXED: Added error class ===== */}
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}

          {/* ===== AUTHOR INPUT - FIXED: Added error class ===== */}
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className={errors.author ? 'error' : ''}
          />
          {errors.author && <p className="error-message">{errors.author}</p>}

          {/* ===== CATEGORY SELECT - FIXED: Added error class ===== */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select Category</option>
            {categories.map(function (cat, index) {
              return (
                <option key={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
          {errors.category && <p className="error-message">{errors.category}</p>}

          {/* ===== RATING INPUT - FIXED: Added error class ===== */}
          <input
            type="number"
            name="rating"
            placeholder="Rating (0-5)"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            className={errors.rating ? 'error' : ''}
          />
          {errors.rating && <p className="error-message">{errors.rating}</p>}

          {/* ===== IMAGE URL INPUT - FIXED: Added error class ===== */}
          <input
            type="text"
            name="image"
            placeholder="Book Cover Image URL (optional)"
            value={formData.image}
            onChange={handleChange}
            className={errors.image ? 'error' : ''}
          />
          {errors.image && <p className="error-message">{errors.image}</p>}
          <p className="helper-text">
            💡 Tip: Right-click an image online and select "Copy image address"
          </p>

          {/* ===== PRICE INPUT - FIXED: Added error class ===== */}
          <input
            type="number"
            name="price"
            placeholder="Price in ₹ (optional)"
            value={formData.price}
            onChange={handleChange}
            className={errors.price ? 'error' : ''}
          />
          {errors.price && <p className="error-message">{errors.price}</p>}

          {/* ===== DESCRIPTION TEXTAREA - FIXED: Added error class ===== */}
          <textarea
            name="description"
            placeholder="Book Description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding Book...' : 'Add Book'}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddBook;