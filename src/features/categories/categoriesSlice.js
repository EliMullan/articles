import {createSlice} from '@reduxjs/toolkit';
import { CATEGORIES } from '../../app/data';

const categoriesSlice = createSlice({
    title: 'categories',
    initialState: CATEGORIES,
    reducers:{}
})

export const selectCategories = state => state.categories.categories;
export default categoriesSlice.reducer;