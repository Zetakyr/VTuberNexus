import React from 'react';
import Vtubers from '../constants/vtuber';

export const Profile = (props) => {
    const id = props.match.params.id;
    const vTuber = Vtubers[id];
    return (
        <div>
            <div>Vtuber Name: {vTuber.name}</div>
            <div>Vtuber Skills: {vTuber.skills.map((value) => {
                return <div key={value}>{value}</div>
            })}</div>

        </div>
    )
}