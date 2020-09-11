import React, { useState, useEffect, useRef } from 'react';

const Dashboard = () => {


    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confimPassword, setconfimPassword] = useState('');
    const firstRender = useRef(true);
    const [disabled, setDisabled] = useState(true);
    const [nameError, setNameError] = useState(null);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return;
        }
        setDisabled(formValidation())
    }, [currentPassword, newPassword, confimPassword])

    const formValidation = () => {

        if (currentPassword.length < 8) {
            setNameError('Current password incorrect')
            return true
        }
        if (newPassword.length < 8 ) {
            setNameError('New password must contain at least 8 characters')
            return true
        }
        if ( !(newPassword === confimPassword)) {
            setNameError('Please repeat correct new password')
            return true
        }
        else {
            setNameError(null)
            return false
        }
    }


    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="header-wrapper">
                        <a href="#" class="logo"><img src="./assets/img/logo_white.svg" alt="" /></a>
                        <a class="current-page" href="#"><img class="dashboard-icon" src="./assets/img/dashboard.svg"
                            alt="dashboard-icon" /> Dashboard</a>
                    </div>

                    <select class="account-options">
                        <option value="volvo">admin@email.com</option>

                    </select>

                </div>

            </header>

            <main class="main-page">
                <div class="container">
                    <nav class="dashboard-navigation">

                        <ul class="menu">
                            <li class="menu-item menu-item-active"> <a href="#"><img class="dashboard-icon"
                                src="./assets/img/settings.svg" alt="dashboard-icon" /> Account Info</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> Users</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> Subscribtion</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> Billing</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> Invoices</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> GDPR</a></li>
                            <li class="menu-item"> <a href="#"><img class="dashboard-icon" src="./assets/img/settings.svg"
                                alt="dashboard-icon" /> Log Out</a></li>
                        </ul>

                    </nav>

                    <div id="dashboard-main-content">

                        <div class="main-content-header">
                            <h2>Account Info</h2>
                            <button class="btn-delete-account">Delete Account</button>
                        </div>

                        <div class="main-content-body">
                            <div class="section-verify-email">
                                <div class="verify-email-text">
                                    <img class="dashboard-icon megaphone-icon" src="./assets/img/megaphone.svg" alt="megaphone-icon" />
                                    <span class="bold-text">Verify your email. </span>
                            We Sent the verification link to
                            <span class="bold-text"> user@emai.com</span>
                                </div>
                                <button class="btn-resend-link">Resend the link</button>

                            </div>

                            <form class="form-change-password">

                                <div class="section-email">
                                    <label class="auth-label" for="auth-email-input">Email</label>
                                    <input readOnly class="auth-input" id="auth-email-input" type="email"
                                        placeholder="user@email.com" />
                                </div>


                                <div class="section-password">

                                    <label class="auth-label" for="auth-password-input">Password</label>
                                    <div class="passwords-wrapper">
                                        <div class="input-wrapper">
                                            <input onChange={e => setCurrentPassword(e.target.value)} class="auth-input" id="auth-password-input" type="password"
                                                placeholder="Current password" />
                                            <button class="show-password"><img class="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>

                                        <div class="input-wrapper">
                                            <input onChange={e => setNewPassword(e.target.value)} class="auth-input" id="auth-password-input" type="password"
                                                placeholder="Set new password" />
                                            <button class="show-password"><img class="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>

                                        <div class="input-wrapper">
                                            <input onChange={e => setconfimPassword(e.target.value)} class="auth-input" id="auth-password-input" type="password"
                                                placeholder="Confim new password" />
                                            <button class="show-password"><img class="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>
                                        <button disabled={disabled} class="btn" id="btn-save">Save</button>
                                    </div>


                                </div>

                                <div class="section-errors">
                                    {nameError && <p>{nameError}</p>}
                                </div>




                            </form>



                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Dashboard;
