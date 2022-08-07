import React, {useEffect} from 'react';
import './sign-in.styles.scss';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await  createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    },[])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            Sign-In
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
