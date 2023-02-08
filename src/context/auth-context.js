import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    emailId:'',
    expiresIn: 0,
    login: (token) => {},
    logout: () => {}
})

export default AuthContext;

export const AuthContextProvider = (props) => {

    const initialUser = localStorage.getItem('token');

    const initialTime = localStorage.getItem('expiresIn');

    const initialEmailId = '';

    const [token,setToken] = useState(initialUser);

    const [expiresIn,setExpiresIn] = useState(initialTime);

    const [emailId,setEmailId] = useState(initialEmailId);

    const isLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token.idToken);
        setExpiresIn(token.expiresIn);
        setEmailId(token.email);
        localStorage.setItem('token',token.idToken);
        localStorage.setItem('expiresIn',token.expiresIn);
        localStorage.setItem('email',token.email);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('email');
    }


    const authContext = {
        token: token,
        expiresIn: expiresIn,
        emailId: emailId,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}