import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import EditProfileForm from './EditProfileForm';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/session/sessionSlice';
import {selectIsLoggedIn} from '../features/session/sessionSlice';



export default function Profile() {
    const currentUser = useSelector(selectCurrentUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate()

useEffect(() => {
    if(!isLoggedIn) {
        navigate('/sign-up');
    }
});


  return (
      <main>
        <h1>{currentUser.user}</h1>
        <Link to={`profile/edit`}>Edit</Link>
        <Routes>
        <Route path='profile/edit' element={<EditProfileForm />}></Route>
        </Routes>
      </main>

      
  )
}