import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const CheckoutBook = ({books, user, setUser}) => {
    //useParams to get book ID 
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    // //find matching element by id 
    const findBook = books.find((book) => {
        return id === book.id
    })

    // //return null if the book is not available 
    if (!findBook) {
        return null
    }

    const availableBook = findBook.available === true ? "yes" : "no"

    const Handlesubmit = async (event) => {
        event.preventDefault()

        const loggedInToken = window.localStorage.getItem('token')

        if (loggedInToken) {
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${findBook.id}`, {available:false}, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
                }
        })
        setUser({books: [...user.books], findBook})
        navigate('/books/:id')

        } else {
            throw 'no token'
        }
    }
      
    return (
        <div>
            <button onClick={Handlesubmit}>
                CHECKOUT
            </button>

        </div>       
    )
}

export default CheckoutBook