import React, { useState, } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import '../css/app.css';



const LoginForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submit = async (e) => {
        e.preventDefault();
        // Do a check for validity here

        props.login(email, password);



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
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ userInfo }) => {
    return { user: userInfo };
}

export const LoginPage = connect(mapStateToProps, { login })(LoginForm);