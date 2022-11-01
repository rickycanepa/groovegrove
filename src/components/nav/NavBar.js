import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__collection">
                <Link className="navbar__link" to="/">
                    Your Collection</Link>
            </li>
            <li className="navbar__item navbar__albumform">
                <Link className="navbar__link" to="/add">
                    Add An Album</Link>
            </li>
            <li className="navbar__item navbar__users">
                <Link className="navbar__link" to="/users">
                    User Collections</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("melomania_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}