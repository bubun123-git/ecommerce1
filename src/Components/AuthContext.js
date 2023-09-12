import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [logoutTimeout, setLogoutTimeout] = useState(null);

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }
        ;

    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        clearTimeout(logoutTimeout)
    };
    const setupLogoutTimer = () => {
        const timeoutId = setTimeout(() => {
            logOutHandler();
        }, 50000);
        setLogoutTimeout(timeoutId);
    };

    useEffect(() => {
        if (userIsLoggedIn) {
            setupLogoutTimer()
        }
    }, [userIsLoggedIn, setupLogoutTimer]);


    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: logInHandler,
        logout: logOutHandler
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
