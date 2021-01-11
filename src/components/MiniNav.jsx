import React from 'react';
import { Link } from 'react-router-dom';



export const MiniNav = (props) => {
    return (
        <div>
            <div id="miniNav">
                <Link className="noLine whiteText" to={`/profile/${props.vTuberId}`}>
                    <div>Profile</div>
                </Link>


                {/* Future Implementation later */}
                {/* <a href={`/profile/${props.vTuberId}/posts`}>
                    <div>Posts</div>
                </a>
                <a href={`/profile/${props.vTuberId}/community`}>
                    <div>Community</div>
                </a> */}


                <Link className="noLine whiteText" to={`/profile/${props.vTuberId}/socials`}>
                    <div>Socials</div>
                </Link>
            </div>
        </div>
    )
}