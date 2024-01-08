import { Link } from "react-router-dom"
import "./Users.css"

export const User = ({ id, userName, userIcon }) => {
        return <section className="user-container">
        <div >
            <Link to={`/users/${id}`} className="user">
                <img className="user-icon" src={userIcon}/>
                <h3 className="user-link">{userName}</h3>
            </Link>
        </div>
    </section>
}