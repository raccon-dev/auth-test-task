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
        if (newPassword.length < 8) {
            setNameError('New password must contain at least 8 characters')
            return true
        }
        if (!(newPassword === confimPassword)) {
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
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <a href="#" className="logo"><img src="./assets/img/logo_white.svg" alt="" /></a>
                        <a className="current-page" href="#"><img className="dashboard-icon" src="./assets/img/dashboard.svg"
                            alt="dashboard-icon" /> Dashboard</a>
                    </div>

                    <select className="account-options">
                        <option value="volvo">admin@email.com</option>

                    </select>

                </div>

            </header>

            <main className="main-page">
                <div className="container">
                    <nav className="dashboard-navigation">

                        <ul className="menu">
                            <li className="menu-item menu-item-active"> <a href="#"><img className="dashboard-icon"
                                src="./assets/img/settings.svg" alt="dashboard-icon" /> Account Info</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/user.svg"
                                alt="user-icon" /> Users</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/rss.svg"
                                alt="subscribtion-icon" /> Subscribtion</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/bill.svg"
                                alt="billing-icon" /> Billing</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/invoice.svg"
                                alt="invoice-icon" /> Invoices</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/account.svg"
                                alt="gdpr-icon" /> GDPR</a></li>
                            <li className="menu-item"> <a href="#"><img className="dashboard-icon" src="./assets/img/logout.svg"
                                alt="logout-icon" /> Log Out</a></li>
                        </ul>

                    </nav>

                    <div id="dashboard-main-content">

                        <div className="main-content-header">
                            <h2>Account Info</h2>
                            <button className="btn-delete-account">Delete Account</button>
                        </div>

                        <div className="main-content-body">
                            <div className="section-verify-email">
                                <div className="verify-email-text">
                                    <img className="dashboard-icon megaphone-icon" src="./assets/img/megaphone.svg" alt="megaphone-icon" />
                                    <span className="bold-text">Verify your email. </span>
                            We Sent the verification link to
                            <span className="bold-text"> user@emai.com</span>
                                </div>
                                <button className="btn-resend-link">Resend the link</button>

                            </div>

                            <form className="form-change-password">

                                <div className="section-email">
                                    <label className="auth-label" htmlFor="auth-email-input">Email</label>
                                    <input readOnly className="auth-input" id="auth-email-input" type="email"
                                        placeholder="user@email.com" />
                                </div>


                                <div className="section-password">

                                    <label className="auth-label" htmlFor="auth-password-input">Password</label>
                                    <div className="passwords-wrapper">
                                        <div className="input-wrapper">
                                            <input onChange={e => setCurrentPassword(e.target.value)} className="auth-input auth-password-input" type="password"
                                                placeholder="Current password" />
                                            <button className="show-password"><img className="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>

                                        <div className="input-wrapper">
                                            <input onChange={e => setNewPassword(e.target.value)} className="auth-input auth-password-input" type="password"
                                                placeholder="Set new password" />
                                            <button className="show-password"><img className="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>

                                        <div className="input-wrapper">
                                            <input onChange={e => setconfimPassword(e.target.value)} className="auth-input auth-password-input" type="password"
                                                placeholder="Confim new password" />
                                            <button className="show-password"><img className="icon-close-eye" src="./assets/img/close-eye.svg"
                                                alt="close-eye" /></button>
                                        </div>
                                        <button disabled={disabled} className="btn" id="btn-save">Save</button>
                                    </div>


                                </div>

                                <div className="section-errors">
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
