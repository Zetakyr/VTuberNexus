import React, { useState, } from 'react';
import axios from 'axios';

import '../css/app.css';



export const CreateVtuber = () => {

    const [name, setName] = useState();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/createVtuber`, {
                name,
            });
        } catch (err) {
            console.error(err.message);
        }

    }

    return (
        <div className="center">
            <form className="loginForm" onSubmit={submit}>
                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
