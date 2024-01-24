import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { firebaseAuth } from './firebaseConfig';
import { LoginFormValues, UserFormValues } from '../interfaces/interfaces';

/* Sign in and Sign up functions */

//required if you want to keep logged in after user exits the browser or closes tab
setPersistence(firebaseAuth,  browserLocalPersistence);

export const SignIn = async ({ email, password }: LoginFormValues) => {
 const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
 return result;
};

export const SignUp = async ({ email, password }: UserFormValues) => {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return result;
};

export const SignOut = async () => {
    await signOut(firebaseAuth);
};