import React from 'react';
import Vtubers from '../constants/vtuber';
import { Header } from '../components/Header';
import '../App.css';
import vtuber from '../constants/vtuber';

export const Profile = (props) => {
    const id = props.match.params.id;
    const vTuber = Vtubers[id];
    console.log(props.match.params);

    return (
        <div class="flex">
            {/* <Header text={vTuber.name} subText="desu~" /> */}
            <div id="profilePanel">
                <div id="miniNav">
                    <a href={`/${id}`}>
                        <div>Profile</div>
                    </a>
                    <a href={`/${id}/posts`}>
                        <div>Posts</div>
                    </a>
                    <a href={`/${id}/community`}>
                        <div>Community</div>
                    </a>
                    <a href={`/${id}/socials`}>
                        <div>Socials</div>
                    </a>
                </div>

                <div id="name">
                    <h1>{vTuber.name}</h1>
                </div>

                <div id="skillz">Skills: {vTuber.skills.map((value) => {
                    return <div key={value}>{value}</div>
                })}
                </div>
                <div>Model: {vTuber.model}</div>
            </div>
            <div id="characterArtPanel">
                {/* {vTuber.characterArt} */}

            </div>

        </div>
    )
}