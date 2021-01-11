import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { FaThumbsUp } from 'react-icons/fa';
import { MiniNav } from '../components/MiniNav';
import { ProfilePanel } from '../components/ProfilePanel';
import { Property } from '../components/Property';
import { Items } from '../components/Items';



const RawProfile = (props) => {
    const id = props.match.params.name;
    const email = props?.user?.email;
    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        try {
            const res = await axios.get(`http://localhost:8080/getVtuber/${id}`);
            setVTuber(res.data)
        } catch (err) {
            console.error(err);
        }
    }, [id])

    const renderYoutubeButton = () => {

        if (!vTuber?.platformLink?.youtube) {
            return null;
        }

        return <a target="_blank" rel="noopener noreferrer" href={`${vTuber.platformLink.youtube}`}>
            <Items>Youtube</Items>
        </a>
    }

    const renderTwitchButton = () => {

        if (!vTuber?.platformLink?.twitch) {
            return null;
        }

        return <a target="_blank" rel="noopener noreferrer" href={`${vTuber.platformLink.twitch}`}>
            <Items>Twitch</Items>


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
                {renderTwitchButton()}
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

    const setLike = async () => {
        try {
            const res = await axios.put(`http://localhost:8080/like/${id}`, {
                email
            });
            setVTuber(res.data?.vtuber)
        } catch (err) {
            console.error(err);
        }
    }

    const likeColor = vTuber?.likes && vTuber?.likes[email] ? 'rgb(0, 110, 255)' : 'grey';

    return (
        <div className="flex">
            {/* <Header text={vTuber.name} subText="desu~" /> */}
            <div>
                <MiniNav vTuberId={id} />
                <ProfilePanel>


                    <div className="flex">
                        <div id="profileLeft">
                            <div className="flex displayName">
                                <div className="name">{vTuber?.name}</div>
                                <FaThumbsUp className="likeButton" color={likeColor} onClick={setLike} />
                            </div>

                            <div id="graphicsContainer">
                                <div id="displayedGraphics"></div>
                                <div id="otherGraphics">

                                </div>
                            </div>

                        </div>
                        <div id="profileRight">
                            {renderLink()}
                            {renderGenre()}
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

const mapStateToProps = ({ userInfo }) => {
    return { user: userInfo };
}

export const Profile = connect(mapStateToProps)(RawProfile);