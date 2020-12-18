import React from 'react';
import Vtubers from '../constants/vtuber';
import '../css/card.css';

export const Card = (props) => {


    return (
        <div id="card">
            <div>NEW CARD</div>
            <div>{props.name}</div>
        </div>
    )
}