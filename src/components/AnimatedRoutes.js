import React from "react";
import Home from "../pages/Home";
import Media from "../pages/Media";
import Me from "../pages/Me";
import Math from "../pages/Math";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/julia-site/" 
                element={
                    <motion.div className="page"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    <Home />
                    </motion.div>
                } />

                <Route path="/julia-site/math" 
                element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    <Math />
                    </motion.div>
                } />

                <Route path="/julia-site/me" 
                element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    <Me />
                    </motion.div>
                } />

                <Route path="/julia-site/media" 
                element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    <Media />
                    </motion.div>
                } />

            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;