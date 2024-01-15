import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { firebaseAuth } from './firebaseConfig';
import { LoginFormValues, UserFormValues } from '../interfaces/interfaces';

/* Sign in and Sign up functions */

//required if you want to keep logged in after user exits the browser or closes tab
setPersistence(firebaseAuth,  browserLocalPersistence);

//Sign in functionality
export const SignIn = async ({ email, password }: LoginFormValues) => {
 const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
 return result;
};

//Sign up functionality
export const SignUp = async ({ email, password }: UserFormValues) => {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return result;
};

//Sign out functionality
export const SignOut = async () => {
    await signOut(firebaseAuth);
};