import {createSlice} from '@reduxjs/toolkit';
import { AUTHORS } from '../../app/data';

const authorsSlice = createSlice({
    title: 'authors',
    initialState: AUTHORS,
    reducers:{}
})

export const selectAuthors = state => state.authors.authors;
export default authorsSlice.reducer;