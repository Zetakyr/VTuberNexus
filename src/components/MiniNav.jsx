import React from 'react';


export const MiniNav = (props) => {
    return (
        <div>
            <div id="miniNav">
                <a href={`/profile/${props.vTuberId}`}>
                    <div>Profile</div>
                </a>
                {/* <a href={`/profile/${props.vTuberId}/posts`}>
                    <div>Posts</div>
                </a>
                <a href={`/profile/${props.vTuberId}/community`}>
                    <div>Community</div>
                </a> */}
                <a href={`/profile/${props.vTuberId}/socials`}>
                    <div>Socials</div>
                </a>
            </div>
        </div>
    )
}