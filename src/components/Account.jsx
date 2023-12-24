
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


const Account = ({user, setUser, setToken, reserved, setReserved }) => {
    const navigate = useNavigate()

    const returnBook = async (resBook) => {
        const token = window.localStorage.getItem('token')

        await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${resBook.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        setReserved(reserved.filter((book) => {
            return (
                book.id !== resBook.id
            )
        }))
    }
    
    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Email: {user.email}</h2>
            <h4>Checked out Books</h4>
            {
                reserved.length === 0 ? (
                    <h4>No books checked out</h4>
                ) : (
                    reserved.map((book) => {
                        return (
                            <div key={book.id}>
                                <li> {book.title} </li>
                                <button onClick={() => {returnBook(book)}}>Return</button>
                            </div>
                        )
                    })
                )
            }
            <button>
                <Link to='/books'>Return to All Books</Link>
            </button>           
        </div>
    )
}

export default Account