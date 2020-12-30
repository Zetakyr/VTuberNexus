import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MiniNav } from '../components/MiniNav';
import { ProfilePanel } from '../components/ProfilePanel';
import { Property } from '../components/Property';
import { Items } from '../components/Items';
import '../App.css';

export const Profile = (props) => {
    const id = props.match.params.id;
    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        // const res = await axios.get(`http://localhost:8080/getVTuber/${id}`);
        const res = await axios.post(`http://localhost:8080/getVTuber/`, {
            id,
            Yoloswaggers: 'haha lol',
            CaoNi: 'Chu Feng',
            'Meow Meow': {
                kaguya: 'u  Kappa',
                shirogane: 'No u'
            }
        });
        console.log(res)
        setVTuber(res.data[id])
    }, [id])

    console.log(props.match.params);
    // console.log(vTuber.platformLink.youtube);

    const renderYoutubeButton = () => {

        if (!vTuber?.platformLink?.youtube) {
            return null;
        }

        return <a target="_blank" href={`${vTuber.platformLink.youtube}`}>
            <Items>Youtube</Items>


        </a>
    }


    const renderLink = () => {
        if (!vTuber?.platformLink) {
            return;
        }
        return <>
            <Property>Link:</Property>

            <div style={{ marginBottom: "30px" }}>
                {renderYoutubeButton()}
            </div>

        </>
    }

    const renderGenre = () => {
        if (!vTuber?.genre) {
            return;
        }
        return <>
            <Property>Stream Genre:</Property>
            <Items>
                <div>
                    {vTuber?.genre?.map((value) => {
                        return <div key={value}>{value}</div>
                    })}
                </div>
            </Items>
        </>
    }

    const renderGroup = () => {
        if (!vTuber?.group) {
            return;
        }
        // <> fragments are used when you dont want to encapsulate stuff in a div
        return <>
            <Property>Group:</Property>
            <Items>
                {vTuber?.group?.map((value) => {
                    return <div key={value}>{value}</div>
                })}
            </Items> </>
    }



    console.log(vTuber?.characterArt)

    return (
        <div className="flex">
            {/* <Header text={vTuber.name} subText="desu~" /> */}
            <div>
                <MiniNav vTuberId={id} />
                <ProfilePanel>


                    <div className="flex">
                        <div id="profileLeft">
                            <h1>{vTuber?.name}</h1>

                            <div id="graphicsContainer">
                                <div id="displayedGraphics"></div>
                                <div id="otherGraphics">

                                </div>
                            </div>

                        </div>
                        <div id="profileRight">
                            {renderLink()}
                            {renderGenre()}
                            {/* <div>Model: {vTuber?.model}</div> */}
                            {renderGroup()}

                        </div>

                    </div>

                </ProfilePanel>
            </div>

            <div style={{ backgroundImage: `url(${vTuber?.characterArt})` }} id="characterArtPanel">

            </div>


        </div >
    )
}