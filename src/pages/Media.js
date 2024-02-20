import React from "react";
import "../App.css";

function Media() {
    return (
        <body className="media page">
            <div className="page-container">
                <div className="page-section">
                    <h1> Media </h1>
                </div>
                <div className="page-section">
                    Short Films
                </div>
                <div className="page-section">
                    Photographs
                </div>
                <div className="page-section">
                    Writing
                    <div className="page-section">
                        Screenplay
                        <div className="page-section">
                            From 220
                        </div>
                    </div>
                    <div className="page-section">
                        Prose
                        <div className="page-section">
                            Everything's an Island
                        </div>
                        <div className="page-section">
                            Baptism one
                        </div>
                    </div>
                    <div className="page-section">
                        Essays
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Media;