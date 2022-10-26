import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './Users.css'

export const UserDetails = () => {
    const { userId } = useParams()
    const [user, updateUser] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
            .then((data) => {
                const singleUser = data
                updateUser(singleUser)})
        }, []

    )


    return <>
        <section className="user-page">
        <header className="username">{user.userName}</header>
        <div className="user-subheader">{user.firstName} from {user.location}</div>
        <div className="user-email">E-mail: {user.email}</div>
        </section>
    </>
}