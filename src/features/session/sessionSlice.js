import {createSlice} from '@reduxjs/toolkit';

const sessionSlice = createSlice({
    title: 'session',
    initialState: {
        user: {},
        isLoggedIn: false
    },
    reducers:{
        signUp: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        editUser: (state, action) => {
            state.user = action.payload;
        },
        signOut: (state, action) => {
            state.user = {};
            state.isLoggedIn = false;
        }
    }
})

export const selectCurrentUser = state => state.session.user;
export const selectIsLoggedIn = state => state.session.isLoggedIn;
export const {signUp, editUser, signOut} = state => state.actions;
export default sessionSlice.reducer;