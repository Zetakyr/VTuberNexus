import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MiniNav } from '../components/MiniNav';
import { ProfilePanel } from '../components/ProfilePanel';
import { Items } from '../components/Items';

export const Socials = (props) => {
    const id = props.match.params.id;
    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        const res = await axios.post(`http://localhost:8080/getVTuber`, { id });
        setVTuber(res.data[id])
    }, [id])
    const renderTwitter = () => {

        if (!vTuber?.socialsLink?.twitter) {
            return null;
        }

        return <a target="_blank" rel="noopener noreferrer" href={`${vTuber.socialsLink.twitter}`}>
            <Items>Twitter</Items>
        </a>
    }

    return (
        <div className="flex">
            <div>
                <MiniNav vTuberId={id} />
                <ProfilePanel>
                    {renderTwitter()}
                </ProfilePanel>
            </div>

            <div style={{ backgroundImage: `url(${vTuber?.characterArt})` }} id="characterArtPanel">

            </div>


        </div >
    )
}