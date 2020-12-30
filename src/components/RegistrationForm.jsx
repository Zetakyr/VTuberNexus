import React, { useState, useEffect } from 'react';
import axios from 'axios';



export const RegistrationForm = (props) => {

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
                <input type="password" placeholder="Confirm Password" onChange={e => setConfirmationPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}