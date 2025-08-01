import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: nanoid(),
      title: '1984',
      author: 'George Orwell',
      description: 'Dystopian social science fiction novel.',
      rating: 4.7,
      category: 'Fiction',
    },
    {
      id: nanoid(),
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'History of humankind.',
      rating: 4.8,
      category: 'Non-Fiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: nanoid(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;