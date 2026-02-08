import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '/Users/dasarisaiteja/Desktop/intenshala/online library system/vite-project/src/utils/BooksData.js';


const initialState = {
  books: initialBooks
};


const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
   
    addBook: (state, action) => {

      // Create a new book object
      const newBook = {
        ...action.payload,     // copy data from payload
        id: Date.now()          // create a unique id
      };

      // Add the new book to the beginning of the array
      state.books.unshift(newBook);
    }
  }
});


export const { addBook } = booksSlice.actions;


export default booksSlice.reducer;
