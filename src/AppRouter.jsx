import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenData from './OpenData'; // Oletetaan, että OpenData on komponenttisi
import Home from './Home'; // Voit lisätä kotisivun tai muita komponentteja

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/opendata" element={<OpenData />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
