import { Link, Route, Routes } from "react-router-dom"
import SingleBook from "./SingleBook"

const Books = ({books}) => {

    return(
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}>
                            <Link to={`/books/${book.id}`}>
                            {book.title}
                            </Link>
                        </li>
                        )
                        
                    })}  
            </ul>
              
        </div>
    )
}

export default Books