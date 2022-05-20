import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategories } from '../features/categories/categoriesSlice';

export default function Category() {
    const categories = useSelector(selectCategories);
    const {name} = useParams();
    const category = categories[name];

    console.log(category);

    return(
        <div>
            <h1>{category.name}</h1>
            <p>{category}</p>
        </div>
    )

}