import React from 'react';
import logo from "../assets/react.svg";

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <img src={logo} alt="react-logo"/>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;