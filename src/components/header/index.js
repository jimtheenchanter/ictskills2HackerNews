import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../authentication/authButton";

const Header = () => (
    <nav className="navbar  navbar-light fixed-top  bg-primary ">
        <Link className="navbar-brand text-white" to="/">
            Hacker News
        </Link>
        <span className="navbar-text text-light">For the stories that matter!</span>
        <ul className="navbar-nav">
            <li className="nav-item">
                <AuthButton />
            </li>
        </ul>
    </nav>
);

export default Header;