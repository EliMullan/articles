import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const searchInputRef = useRef();    
    const navigate= useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();
        const query = {
            title: searchInputRef.current.value
        }        
        const queryString = new URLSearchParams(query).toString();  
       

        navigate(`/articles/${queryString}`)
    }

    return (
        <form onSubmit={onSearchSubmit} className='search-form'>
                <input
                    type='text'  
                    className='search'
                    ref={searchInputRef}
                />
                <button type='submit' className='search-button'>
                 🔎
                </button>
            </form>            
    );
}