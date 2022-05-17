import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../features/articles/articlesSlice';
import authorsSlice from '../features/authors/authorsSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import sessionSlice from '../features/session/sessionSlice';


export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    authors: authorsSlice,
    categories: categoriesSlice,
    session: sessionSlice
  },
});
