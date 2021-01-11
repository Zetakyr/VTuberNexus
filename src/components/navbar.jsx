import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../actions';
import '../css/navbar.css';

const RawNavbar = (props) => {

    const { user } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        // This feature is done in Navbar because all pages have Navbar. Possible to move to another component that handles authentication
        const pastUser = localStorage.getItem('user');
        const decodedUser = pastUser && JSON.parse(pastUser)
        if ((!user || !user.email) && decodedUser) {
            dispatch({ type: 'login', payload: decodedUser })
        }
    }, [user]);


    const logoutFunction = async () => {
        props.logout();
    }

    const renderLogoutButton = () => {
        if (!props?.user?.email) {
            return null;
        }
        return <>
            <div onClick={logoutFunction} className="authenticateButton">
                Logout
            </div>
        </>
    }

    const renderLoginButton = () => {
        if (props?.user?.email) {
            return null;
        }
        return <>
            <Link to="/login" className="authenticateButton noLine">
                Login
                </Link>
            <Link to="/signup" className="authenticateButton noLine">
                Sign Up
                </Link>
        </>
    }


    return (
        <div id="navbar">
            <div id="navLinks">
                <Link className="noLine whiteText" to="/home">
                    <div>Home</div>
                </Link>
                <Link className="noLine whiteText" to="/vtubers">
                    <div>Vtubers</div>
                </Link>
            </div>
            <div id="authenticate">
                {renderLogoutButton()}
                {renderLoginButton()}

            </div>
        </div>
    )
}

const mapStateToProps = ({ userInfo }) => {
    return { user: userInfo };
}

export const Navbar = connect(mapStateToProps, { logout })(RawNavbar);