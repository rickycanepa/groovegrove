// const Login = () => {

//   const handleLogin = () => {
//     login({
//       id: '1',
//       name: 'John Doe',
//       email: 'john.doe@email.com',
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { firebaseAuth } from '../modules/auth/firebase'
// import { createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut, setPersistence,
//     browserLocalPersistence
//     } from 'firebase/auth';

// export const Auth = () => {    
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const signIn = async () => {
//         await createUserWithEmailAndPassword(firebaseAuth, email, password)
//     };
    
//     return (
//         <div className="text-center">
//             <div className="m-6">
//                 <input placeholder="Email..." 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 />
//             </div>
//             <div>
//             <input placeholder="Password..."
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             </div>
//             <button onClick={signIn}>Sign In</button>
//         </div>
//     )
// }

// export default function Login() {    

//     return (
//         <>
//             <div>
//                 <form>
//                     <input type="email" placeholder="username..."></input>
//                     <input type="password" placeholder="password..."></input>
//                     <input type="submit" value="Login"></input>
//                 </form>

//             </div>
//             <div>
//                 <Link to={"/register"}>Not a member? <span className="text-whitesmoke-500">Register here</span></Link>
//             </div>
//         </>
//     )
// }