import { useParams, Link } from "react-router-dom"

const SingleBook = ({books}) => {
    //useParams to get book ID 
    const params = useParams()
    const id = params.id*1


    // //find matching element by id 
    const findBook = books.find((book) => {
        return id === book.id
    })

    // //return null if the book is not available 
    if (!findBook) {
        return null
    }
      
    return (
        <div>
            <p>{findBook.title}</p>
            <p>{findBook.author}</p>
            <p>{findBook.available}</p>
            <p>{findBook.description}</p>
            <Link to='/books'>Back to All Books</Link>

        </div>       
    )
}

export default SingleBook