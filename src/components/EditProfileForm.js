import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../features/session/sessionSlice";


export default function EditProfileForm () {
    const [newUserName, setNewUserName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editUser({user: newUserName}))
    }

    const handleChange = e => {
        setNewUserName(e.currentTarget.value);
    }

    return(
        <section>
            <h1>Edit User Name</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Username 
                <div>
                    <input 
                    id='username'
                    value={newUserName}
                    onChange={handleChange}
                    />
                    <button type='submit' className='primary'>Edit User Name</button>
                </div>
            </label>
        </form>
        </section>
    )
}