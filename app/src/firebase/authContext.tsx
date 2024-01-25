import React, { createContext, useContext, useState, useEffect } from 'react';
import { firebaseAuth } from './firebaseConfig';
import { IAuth, UserFormValues, LoginFormValues } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';
import { User, onAuthStateChanged } from 'firebase/auth';
import * as authService from './authService.ts';

export const AuthContext = createContext<IAuth>({
    user: firebaseAuth.currentUser,
    loading: false,
    SignIn: () => {},
    SignUp: () => {},
    SignOut: () => {},
});

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const SignUp = async (creds: UserFormValues) => {
        setIsLoading(true);
        try {
            const userCredential = await authService.SignUp(creds) as { user: User };
            const { user } = userCredential;
            if (user) {
                setCurrentUser(user)
                navigate('/', { replace: true });
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const SignIn = async (creds: LoginFormValues) => {
        setIsLoading(true);
        try {
            const userCredential = await authService.SignIn(creds) as { user: User };
            const { user } = userCredential;
            if (user) {
                setCurrentUser(user);
                navigate('/', { replace: true });
            } else {
                navigate('/');
            }
        } catch (error) {
            // Handle errors
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const SignOut = async () => {
        setIsLoading(true);
        try {
            await SignOut();
            setCurrentUser(null);
            navigate('/', { replace: true });
        } catch (error) {
            // Handle errors
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const authValues: IAuth = {
        user: currentUser,
        loading: isLoading,
        SignIn,
        SignUp,
        SignOut,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

// export function UserAuthContextProvider({ children }: {children: React.ReactNode}) {
//     const [user, setUser] = useState<FirebaseUser | null>(null);

//     function logIn(email: string, password: string) {
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     function signUp(email: string, password: string) {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     function logOut() {
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             console.log("Auth", currentUser);
//             setUser(currentUser);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     return (
//         <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
//             {children}
//         </userAuthContext.Provider>
//     );
// }

// export function useUserAuth() {
//     return useContext(userAuthContext);
// }
// type ValueProp = {
//     userId: string;
//     setUserId: React.Dispatch<React.SetStateAction<string>>;
// }

// type ContextProp = {
//     children: React.ReactNode
// }

// export const AppContext = React.createContext({} as ValueProp);


// export default function Context({ children }: ContextProp) {
//     const [ userId, setUserId ] = useState<string>('');

//     return (
//         <AppContext.Provider value={{userId, setUserId}}>
//         {children}
//         </AppContext.Provider>
//     )
// }

// export const useGlobalContext = ():ValueProp => {
//     return useContext(AppContext);
// }

// // interface AuthProviderProps {
// //   children: ReactNode;
// // }

// // export function AuthProvider({ children }: {children: React.ReactNode}): React.FC<AuthProviderProps> {
// //   const [user, setUser] = useState<FirebaseUser | null>(null);

// //   const signIn = async (email: string, password: string) => {
// //     // Firebase sign-in logic
// //   };

// //   const signOut = async () => {
// //     // Firebase sign-out logic
// //   };

// //   useEffect(() => {
// //     // Firebase onAuthStateChanged listener
// //   }, []);


// //   const authValues: AuthContext = {
// //     user,
// //     signIn,
// //     signOut,
// //   };

// //   // return (
// //   //   <AuthContext.Provider value={ user, signIn, signOut }>
// //   //     {children}
// //   //   </AuthContext.Provider>
// //   // );
// //   return (
// //     <AuthContext.Provider value={authValues}>{children}</AuthContext>
// //   );
// // };

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };