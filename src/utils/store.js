import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});