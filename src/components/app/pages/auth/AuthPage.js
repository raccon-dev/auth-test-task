import React, { useState, useEffect, useRef } from 'react';
import './../css/reset.css'
import './../css/general.css'
import './../css/style.css'

import { useHistory } from "react-router-dom";

const AuthPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const firstRender = useRef(true)
    const [disabled, setDisabled] = useState(true)
    const [nameError, setNameError] = useState(null)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return;
        }
        setDisabled(formValidation())
    }, [password, email])

    const formValidation = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(email).toLowerCase())) {
            setNameError('Please enter correct email')
            return true
        } if (password.length < 8) {
            setNameError('Password must contain at least 8 characters')
            return true
        }
        else {
            setNameError(null)
            return false
        }
    }
    const handlePasswordShow = e => {
        console.log('show')
        e.preventDefault();
        const passwordsInput = document.querySelector('.password-input');
        const closeEyes = document.querySelector('.icon-close-eye');
        if (passwordsInput.type === "password") {
            passwordsInput.type = "text";
            closeEyes.src = "./assets/img/eye-open.svg"

        } else {
            passwordsInput.type = "password";
            closeEyes.src = "./assets/img/close-eye.svg"
        }
    }

    return (
        <div id="auth-section">
            <a href="#" className="auth-title"><img src="./assets/img/logo_white.svg" alt="seobase-logo" /></a>

            <div className="auth-body">
                <h3 className="section-title">Log In</h3>
                <form className="auth-htmlForm">
                    <div className="section-email">
                        <label className="auth-label" htmlFor="auth-email-input">Email</label>
                        <input onChange={e => setEmail(e.target.value)} className="auth-input" id="auth-email-input" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="section-password">
                        <div className="auth-labels">
                            <label className="auth-label" htmlFor="auth-password-input">Password</label>
                            <label className="auth-label" htmlFor="auth-password-input"><a className="auth-forgot-password" href="#">Forgot
                    Password?</a></label>
                        </div>
                        <div className="input-wrapper">
                            <input onChange={e => setPassword(e.target.value)} className="auth-input password-input" type="password" placeholder="Enter password" />
                            <button onClick={e => handlePasswordShow(e)} className="show-password"><img className="icon-close-eye" src="./assets/img/close-eye.svg" alt="close-eye" /></button>
                        </div>
                    </div>

                    <div className="section-errors">
                        {nameError && <p>{nameError}</p>}
                    </div>

                    <button onClick={e => history.push("/dashboard")} type='submit' disabled={disabled} className="btn" id="btn-logIn">Log In</button>

                </form>

                <p className="section-create-account">Don't have an account? <a className="signUp-link" href="#">Sign Up</a> </p>
            </div>

        </div>


    );
}

export default AuthPage;
