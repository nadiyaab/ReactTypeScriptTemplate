import React, { useState, useEffect, ChangeEvent } from 'react';

interface Book{
    title: string;
    author: string;
}

export function AllBooks() {
    const [books, setBooks] = useState<Book[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/books?search=${search}`)
        .then(response => response.json())
        .then(json => setBooks(json.books))
    }, [search]);

    
    if (books.length === 0) {
        return <div>No results</div>
    }

    const updateSearch = (event : ChangeEvent <HTMLInputElement>) => {
        const newSearch = event.target.value
        setSearch(newSearch);
    }
     
    const bookList = books.map((book) => {
        return <Book book={book}></Book>
    })
    return (
        <div>
            <h2>All Books</h2>
            <label>
               <input type="text" value={search} 
               onChange={updateSearch}/>
            </label>
            <ul>
            {bookList}
            </ul>
        </div>

    );
}

interface BookProps {
    book: Book;
}

const Book = ({book}: BookProps) => {
    return <li>{book.author}, {book.title}</li>
}; 