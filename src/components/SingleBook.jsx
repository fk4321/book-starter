import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import CheckoutBook from "./CheckoutBook"

const SingleBook = ({books, user, setUser}) => {
    //useParams to get book ID 
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    // //find matching element by id 
    const findBook = books.find((book) => {
        return id === book.id
    })

    console.log(findBook)
    // //return null if the book is not available 
    if (!findBook) {
        return null
    }

    const availableBook = findBook.available === true ? "yes" : "no"
      
    return (
        <div>
            <img src={findBook.coverimage} alt="Book Image" />
            <p>Title: {findBook.title}</p>
            <p>Author: {findBook.author}</p>
            <p>Available? {availableBook}</p>
            <p>Description: {findBook.description}</p>
            <button>               
                <Link to='/books'>Back to All Books</Link>
            </button>
            <CheckoutBook books={books} user={user} setUser={setUser}/>

        </div>       
    )
}

export default SingleBook