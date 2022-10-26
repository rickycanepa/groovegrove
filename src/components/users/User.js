import { Link } from "react-router-dom"
import "./Users.css"

export const User = ({ id, userName}) => {
        return <section className="user">
        <div>
            <Link to={`/users/${id}`}>{userName}</Link>
        </div>
    </section>
}