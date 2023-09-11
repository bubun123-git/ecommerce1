import React, { useRef, useState } from "react";
import  '../Login/AuthForm.css'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchModeHandler = () => {
        setIsLogin(prevState => !prevState);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin) {
            console.log(enteredEmail, enteredPassword);
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY', {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res.ok) {
                        // Handle successful sign-up here
                    } else {
                        return res.json().then(data => {
                            let errorMessage = 'Authentication failed';
                            throw new Error(errorMessage);
                        })
                    }
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                });
        }
    }

    return (
        <section className="auth-form">
            <h1>{isLogin ? 'LOGIN' : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type='email' id="email" required ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type='password' id="password" required ref={passwordInputRef} />
                </div>
                <div className="auth-button">
                    
                <button >{isLogin ? 'Login' : "Create Account"}</button><br /><br />
                    <button type="button" onClick={switchModeHandler} className="toggle-button">
                        {isLogin ? 'Create New Account' : 'Login with Existing Account'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
