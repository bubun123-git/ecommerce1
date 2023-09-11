import React, { useRef, useState } from "react";
import classes from '../Login/AuthForm.css'

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
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label className={classes.control} htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailInputRef} required />
                </div>
                <div>
                    <label className={classes.actions} htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passwordInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                    <button type="button" className={classes.toggle} onClick={switchModeHandler}>
                        Switch to {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
