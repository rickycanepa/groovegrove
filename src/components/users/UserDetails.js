import './Users.css'
export const UserDetails = ({ user }) => {

    return <>
        <section className="user-page">
            <div className="user-title">
                <img className="user-icon-large" alt="user-pic" src={user.userIcon}/>
                <header className="username">{user.userName}</header>
            </div>
        <div className="user-subheader">{user.firstName} from {user.location}</div>
        <div className="user-email">E-mail: {user.email}</div>
        </section>
    </>
}