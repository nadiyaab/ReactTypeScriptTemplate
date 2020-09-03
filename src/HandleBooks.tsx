import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

interface Item {
    title: string;
    author: string;
    cover_image_url: string;
    published_date: string;
    publisher: string;
    isbn: string;
}

export function HandleBooks() {
    const [item, setItem] = useState<Item>({title: 'a', author:'a', cover_image_url: 'b', published_date: 'c', publisher: 'd', isbn: "2"})
    useEffect(() => {

        fetch(`http://localhost:3001/books/${id}`)
        .then(response => response.json())
        .then(json => setItem(json.book))
    }, [])

   let { id } = useParams();
return  <section>
    <h2>Handle Books {id}</h2>
    <div>Title: {item.title}</div>
    <div> Author: {item.author}</div>
  <img src = {item.cover_image_url}/>
  <div> Published date: {item.published_date}</div>
  <div>Publisher: {item.publisher}</div>
  <div>ISBN: {item.isbn}</div>
</section>

};

