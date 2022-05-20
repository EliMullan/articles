import React, {useState} from 'react';
import { signUp } from '../features/session/sessionSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function SignUp() {
    const [currentUser, setCurrentUser] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit  = e => {
        e.preventDefault();
        dispatch(signUp({user: currentUser}));
        navigate('/profile');
    }

    const handleChange = e => {
        setCurrentUser(e.currentTarget.value);
    }
    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username 
                    <div>
                        <input 
                        id='username'
                        value={currentUser}
                        onChange={handleChange}
                        />
                        <button type='submit' className='primary'>Sign Up</button>
                    </div>
                    </label>
            </form>
        </section>
    )

}