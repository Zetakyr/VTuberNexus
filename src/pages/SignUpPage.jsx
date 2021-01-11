import React, { useState, } from 'react';
import axios from 'axios';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import '../css/app.css';



const RegistrationForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmationPassword, setConfirmationPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();
        if (password !== confirmationPassword) {
            return;
        }
        try {
            const res = await axios.post(`http://localhost:8080/register`, {
                email,
                password
            });
            props.login(email, password);
        } catch (err) {
            console.error(err.message);
        }

    }

    if (props?.user?.email) {
        return <Redirect to="/home" />
    }


    return (
        <div className="center">
            <div className="loginForm">
                <form className="flexColumn" onSubmit={submit}>
                    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" onChange={e => setConfirmationPassword(e.target.value)} />
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ userInfo }) => {
    return { user: userInfo };
}

export const SignUpPage = connect(mapStateToProps, { login })(RegistrationForm);