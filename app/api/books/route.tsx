import books from "../db";

export async function GET(){
    return Response.json(books);
}

export async function POST(request: Request){
    const books = await request.json();
    const newBook = {
        id: books.id + 1,
        title: books.title,
        author: books.author,
    };
    books.push(newBook);
    return Response.json(newBook);
}