import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, signOut} from '../features/session/sessionSlice';
import {NavLink} from 'react-router-dom';

export default function Header() {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch= useDispatch();
    const handleSignOut = e => dispatch(signOut());

    return (
        <div className='header'>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/articles'>Articles</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            {currentUser.user? 
                <>
                    <NavLink to='/profile'>Profile</NavLink>
                    <button onClick={handleSignOut}>Log Out</button>
                </> 
                :
                <NavLink to='/sign-up'>Sign Up</NavLink>   
            }
        </div>        
    )
}