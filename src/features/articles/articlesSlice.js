import {createSlice} from '@reduxjs/toolkit';
import { ARTICLES } from '../../app/data';

const articlesSlice = createSlice({
    title: 'articles',
    initialState: ARTICLES,
    reducers:{}
})

export const selectArticles = state => state.articles.articles;
export default articlesSlice.reducer;
