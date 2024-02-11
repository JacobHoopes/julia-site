import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="home">
            <div className="headerContainer">
                <h1> Home Page </h1>
                <p> Some home page content </p>
            </div>
        </div>
    );
}

export default Home;