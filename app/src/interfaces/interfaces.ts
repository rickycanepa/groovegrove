import { User as FirebaseUser } from 'firebase/auth';

export interface IAuth {
    user: FirebaseUser | null;
    loading: boolean;
    SignIn: (creds: LoginFormValues) => void;
    SignUp: (creds: UserFormValues) => void;
    SignOut: () => void;
  }

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName: string;
}