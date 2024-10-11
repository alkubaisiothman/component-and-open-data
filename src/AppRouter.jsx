import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenData from "./OpenData";
import Home from "./Home";

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