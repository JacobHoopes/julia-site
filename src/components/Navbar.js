import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-container">
                <Link to="/" className="flex-item">
                    Home
                </Link>
                <Link to="/math" className="flex-item">
                    Math
                </Link>
                <Link to="/me" className="flex-item">
                    Me
                </Link>
                <Link to="/media" className="flex-item">
                    Media
                </Link>
            </div>
        </div>
        
    );
}

export default Navbar;