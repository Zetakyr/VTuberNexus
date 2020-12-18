import React from 'react';

export const Header = (props) => {
    return (
        <div><h1>{props.text}</h1><h3 style={props.subTextStyle}>{props.subText}</h3></div>
    )
}