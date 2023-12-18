
import { useNavigate, Link } from "react-router-dom"
import CheckoutBook from "./CheckoutBook"


const Account = ({books, user, setUser, setToken }) => {
    const navigate = useNavigate()
    
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
            <p>Book1</p>
            <p>Book2</p>
            {/* <CheckoutBook books={books} user={user} setUser={setUser}/> */}
            <button>
                <Link to='/books'>Return to All Books</Link>
            </button>
            
            
           
        </div>
    )
}

export default Account