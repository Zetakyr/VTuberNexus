import React from 'react';
import '../css/navbar.css';

export const Navbar = () => {
    return (
        <div id="navbar">
            <a href="/home">
                <div>Home</div>
            </a>
            <a href="/vtubers">
                <div>Vtubers</div>
            </a>
        </div>
    )
}