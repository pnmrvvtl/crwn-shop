import './sign-in-form.styles.scss'
import React, {useState} from 'react';
import {
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (e) {
            alert(`user sign-in encountered an error: ${e}`);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type="email" required onChange={handleChange}
                    name="email"
                    value={email}/>

                <FormInput
                    label='Password'
                    type="password" required onChange={handleChange}
                    name="password"
                    value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
