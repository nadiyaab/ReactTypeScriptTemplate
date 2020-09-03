import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { AllBooks } from './allBooks';
import { HandleBooks } from './HandleBooks';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import { useHistory } from 'react-router-dom';


export const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const history = useHistory();

    function submitForm(event: FormEvent) {
        event.preventDefault();
        const data = {
            title: title,
            author: author
        }
        fetch ("http://localhost:3001/books/new", {
            method: "post", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json" 
            }
        })
        .then (() => {history.push("/books")})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"> Title</label>
            <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
            <label htmlFor="author"> Author</label>
            <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />

            <button type="submit">Submit</button>
        </form>


    );
}

