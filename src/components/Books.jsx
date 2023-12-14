import { useState, useEffect } from "react"
import axios from "axios"

const Books = () => {
    //state variables 
    const [books, setBooks] = useState([])

    //fetch books
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
            console.log(response.data.books)
            //update state
            setBooks(response.data.books)
        }
        fetchBooks()
    },[])

    return(
        <div>

            <h1>Books</h1>
            {books.map((book) => {
                return (
                    <ul key={book.id}>
                        <li>{book.title}</li>
                    </ul>
                )
            })}
        
        </div>
    )
}

export default Books