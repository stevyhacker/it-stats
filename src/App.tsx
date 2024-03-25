import React from 'react';
import './App.css';
import YearList from "./YearList/YearList";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CompanyItem from "./CompanyItem/CompanyItem";
import ReactGA from 'react-ga';
import RouteTracker from "./RouteTracker";
import Footer from "./Footer/Footer";

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

function App() {

    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <BrowserRouter>
            <div className="app">
                <Link to={"/"}>
                    <h3 className="text-center app-title ">IT Montenegro - Stats by Year</h3>
                </Link>
                <br/>

                <Routes>
                    <Route path="/company/:name" element={<CompanyItem />} />
                    <Route path="/" element={<YearList />} />
                </Routes>

                <Footer/>
                <RouteTracker/>
            </div>
        </BrowserRouter>
    );
}

export default App;
