import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../features/categories/categoriesSlice";
import {  Routes, Route, Link, useLocation } from "react-router-dom";

export default function Categories() {
    const categories = useSelector(selectCategories);
    const categoriesList = Object.keys(categories);
    const location = useLocation();

    return(
        <main>
            <h1>Categories</h1>
            <ul>
            {categoriesList.map(category => {
                return(
                    <li key={category}><Link to={`${location.pathname}/${category}`}>{category}</Link></li> 
                )
            })}
        </ul>
        <Routes>
        <Route path='categories/:name' element={<Categories />}></Route> 
    </Routes>      
        </main>
    )
}