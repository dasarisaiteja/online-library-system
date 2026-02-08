import { Link } from "react-router-dom"

function Header(){
    return (
        <>
        <div>
            <h2>Book App Library</h2>
        </div>
        
        <ul>
            <Link to={"/"}>
            <li>
                HOME
            </li>
            </Link>
            <Link to={"/BrowseBooks"}>
            <li>
                Browse Books
            </li>
            </Link>
            <Link to={"/AddBook"}>
            <li>
                Add Book
            </li>
            </Link>
            
        </ul>
        </>
    )
}

export default Header