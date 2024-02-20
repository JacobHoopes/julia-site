import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <div className="header flex-container">
            <Link to="/julia-site/" className="header-item flex-item">
                Home
            </Link>
            <Link to="/julia-site/math" className="header-item flex-item">
                Math
            </Link>
            <Link to="/julia-site/me" className="header-item flex-item">
                Me
            </Link>
            <Link to="/julia-site/media" className="header-item flex-item">
                Media
            </Link>
        </div>
        
    );
}

export default Header;