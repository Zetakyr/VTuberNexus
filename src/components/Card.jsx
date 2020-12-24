import React from 'react';
import '../css/card.css';

export const Card = (props) => {


    return (
        <div id="card">
            <div style={{
                backgroundImage: `url(${props?.cardArt})`,
                width: "100%",
                height: "70%",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}></div>
            <div id="cardName">{props.name}</div>
        </div>
    )
}