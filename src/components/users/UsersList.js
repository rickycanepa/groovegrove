import { useState, useEffect } from "react"
import { User } from "./User"
import "./Users.css"

export const UsersList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(
        () => {
            fetch('http://localhost:8088/users?_sort=name')
            .then(res => res.json())
            .then((usersData) => {setUsers(usersData)})
        }
        , []
    )

    return (
    <>
        <header className="user-header">A list of all MeloMania users</header>
        <article className="users">
        {
            users.map(user => < User key={user.id}
                id={user.id}
                userName={user.userName} />)
        }
        </article>
    </>
    )
}