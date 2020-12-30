import React from 'react';
import '../css/navbar.css';

export const Navbar = () => {
    return (
        <div id="navbar">
            <a className="noLine whiteText" href="/home">
                <div>Home</div>
            </a>
            <a className="noLine whiteText" href="/vtubers">
                <div>Vtubers</div>
            </a>
        </div>
    )
}