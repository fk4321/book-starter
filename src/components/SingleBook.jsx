import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SingleBook = ({books, user, reserved,setReserved }) => {
    //useParams to get book ID 
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    // //find matching element by id 
    const findBook = books.find((book) => {
        return id === book.id
    })

    const HandleSubmit = async () => {
        const token = window.localStorage.getItem('token')
        const {data} = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`,
        {available: false},
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        window.alert(`Checked out ${data.book.title}`)
        setReserved([...reserved, data.book])
    }

    // //return null if the book is not available 
    if (!findBook) {
        return null
    }

    const availableBook = findBook.available === true ? "yes" : "no"
      
    return (
        <div>
            <h1>Single Book</h1>
            <p>Title: {findBook.title}</p>
            <img src={findBook.coverimage} alt="Book Image" />
            <p>Author: {findBook.author}</p>
            <p>Available? {availableBook}</p>
            <p>Description: {findBook.description}</p>
            <button disabled={ user.firstname && findBook.available ? false : true} onClick={() => {HandleSubmit()}}>
                Checkout
            </button>
            <button>               
                <Link to='/books'>Back to All Books</Link>
            </button>
            {user.firstname ? null : <p>Log in to check out a book!</p>}

        </div>       
    )
}

export default SingleBook