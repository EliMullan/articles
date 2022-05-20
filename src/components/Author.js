import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { useParams, Link } from "react-router-dom";

export default function Author() {
    const authors = useSelector(selectAuthors);
    const {name} = useParams();
    const author = authors[name];
    return(
        <main>
            <h1>Articles by {name}</h1>
            <ul>
              {author && author.articles? 
                author.articles.map(slug => {
                    return (
                    <li key={slug}>
                        <Link to={`/articles/${slug}`}>{slug}</Link>
                    </li>
                    )
                })
                : <p> No articles found... </p>
            }
            </ul>
        </main>
    )
}