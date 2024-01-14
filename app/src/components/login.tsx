import { Link } from "react-router-dom";


export default function Login() {    

    return (
        <>
            <div>
                <form>
                    <input type="email" placeholder="username..."></input>
                    <input type="password" placeholder="password..."></input>
                    <input type="submit" value="Login"></input>
                </form>

            </div>
            <div>
                <Link to={"/register"}>Not a member? <span className="text-whitesmoke-500">Register here</span></Link>
            </div>
        </>
    )
}