import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MiniNav } from '../components/MiniNav';
import { ProfilePanel } from '../components/ProfilePanel';
import { Items } from '../components/Items';
import '../App.css';

export const Socials = (props) => {
    const id = props.match.params.id;
    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        const res = await axios.get(`http://localhost:8080/getVTuber/${id}`);
        console.log(res)
        setVTuber(res.data[id])
    }, [id])

    console.log(props.match.params);
    const renderTwitter = () => {

        if (!vTuber?.socialsLink?.twitter) {
            return null;
        }

        return <a target="_blank" href={`${vTuber.socialsLink.twitter}`}>
            <Items>Twitter</Items>


        </a>
    }




    console.log(vTuber?.characterArt)

    return (
        <div className="flex">
            {/* <Header text={vTuber.name} subText="desu~" /> */}
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