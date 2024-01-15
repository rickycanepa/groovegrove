import React from 'react';
import { firebaseAuth } from '../firebaseConfig';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuth, UserFormValues, LoginFormValues } from '../../interfaces/interfaces';
import { User, onAuthStateChanged } from 'firebase/auth';
import { SignIn, SignUp, SignOut } from '../authService';

export const AuthContext = createContext<IAuth>({
    user: firebaseAuth.currentUser,
    loading: false,
    SignIn: () => {},
    SignUp: () => {},
    SignOut: () => {},
});

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [currentUser, setCurrentUser] =  useState<User  |  null>(null);
    const [isLoading, setIsLoading] =  useState<boolean>(false);
    const [isAuthLoading, setIsAuthLoading] =  useState<boolean>(true);
    const navigate = useNavigate();

    //Sign up
    const SignUp = (creds:  UserFormValues) => {
        setIsLoading(true);
        TAuth.SignUp(creds)
        .then(async userCredential => {
            const { user } = userCredential; //object destructuring
            if (user) setCurrentUser(user);
            //redirect the user on the targeted route
            navigate('/dashboard', { replace:  true });
            } else { Console.log("do something if user is empty like an alert") }
            setIsLoading(false);
        })
        .catch(error => {
         //check for error
         if (error.code  ===  'auth/email-already-in-use') {
          //show an alert or console
         } else if (error.code  ===  'auth/too-many-requests') {
          //do something like an alert
         }
         // you can check for more error like email not valid or something
         setIsLoading(false);
        });
    }

    const SignIn = async (creds:  LoginFormValues,  onSuccess: () =>  void) => {
        setIsLoading(true);
        TAuth.SignIn(creds)
        .then(userCredential  => {
            const { user } =  userCredential;
            if  (user) {
            setCurrentUser(user);
            //redirect user to targeted route
            navigate('/dashboard', { replace:  true });
            } 
            else { //do something }
            
            setIsLoading(false);
        })
        .catch(error  => {
            if  (error.code  ===  'auth/wrong-password') {
            //show error
            } else  if  (error.code  ===  'auth/too-many-requests') {
            //show error
            }
            setIsLoading(false);
        });
    }

    //import SignOut from AuthService that we created above
    const SignOut = async () => {
        setIsLoading(true);
        try {
        await SignOut();
        setCurrentUser(null);
        navigate('/signin', { replace:  true });
        } catch  (error) {
        setIsLoading(false);
        //show error alert
        }
    }

    //create Auth Values
    const authValues: IAuth = {
    user: currentUser,
    loading: isLoading,
    SignIn,
    SignUp,
    SignOut,
    }

    useEffect(() => {
    //onAuthStateChanged check if the user is still logged in or not
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
    setCurrentUser(user);
    setIsAuthLoading(false);
    });
    return unsubscribe;
    }, []);

    //If loading for the first time when visiting the page
    if (isAuthLoading) return <PageLoading />;

    return (
        <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;