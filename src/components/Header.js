import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectCurrentUser, signOut} from '../features/session/sessionSlice';
import {NavLink} from 'react-router-dom';

export function Header() {
    const currentUser = useSelector(SelectCurrentUser);
    const dispatch= useDispatch();
    const handleSignOut = dispatch(signOut)

    return (
        <header>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/articles'>Articles</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            {currentUser.userName? 
                <>
                    <NavLink to='/profile'>Profile</NavLink>
                    <button onClick={handleSignOut}>Log Out</button>
                </> 
                :
                <NavLink to='/sign-up'>Sign Up</NavLink>   
            }
        </header>        
    )
}