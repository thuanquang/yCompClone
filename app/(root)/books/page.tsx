import React from 'react'

export default async function page() {
  const response = await fetch('http://localhost:3000/api/books');
  const books = await response.json();
    return (
    <div>
        <h1>Books</h1>
        <ul>
            {books.map((books: {id:number, title:string, author:string}) => (
                <li key={books.id}>{books.title} - {books.author}</li>
            ))}
        </ul>
    </div>
  )
}