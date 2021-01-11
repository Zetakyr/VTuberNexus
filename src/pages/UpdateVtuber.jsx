import React, { useState, } from 'react';
import axios from 'axios';

import '../css/app.css';



export const UpdateVtuber = (props) => {

    const id = props.match.params.name;
    const [youtube, setYT] = useState();
    const [twitch, setTwitch] = useState();
    const [charArt, setCharArt] = useState();
    const [cardArt, setCardArt] = useState();
    const [newGenre, setAddGenre] = useState();

    const addGenre = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/addgenre/${id}`, {
                newGenre,
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/updateVtuber/${id}`, {
                youtube, twitch, charArt, cardArt,
            });
        } catch (err) {
            console.error(err.message);
        }

    }

    return (
        <div className="center">
            <div className="loginForm">
                <form className="flexColumn" onSubmit={submit}>
                    <input placeholder="Youtube" onChange={e => setYT(e.target.value)} />
                    <input placeholder="Twitch" onChange={e => setTwitch(e.target.value)} />
                    <input placeholder="Character Art" onChange={e => setCharArt(e.target.value)} />
                    <input placeholder="Card Art" onChange={e => setCardArt(e.target.value)} />
                    <input type="submit" value="Update" />
                </form>
                <form className="flexColumn" onSubmit={addGenre}>
                    <input placeholder="add genre" onChange={e => setAddGenre(e.target.value)} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}
