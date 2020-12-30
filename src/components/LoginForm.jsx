import React, { useState, useEffect } from 'react';
import axios from 'axios';



export const LoginForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/login`, {
                email,
                password
            });
            console.log(res.data);
        } catch (err) {
            console.error(err.message);
        }

    }


    return (
        <div>
            <form onSubmit={submit}>
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}