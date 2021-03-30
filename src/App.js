import React from 'react';
import './App.css';
import YearList from "./YearList/YearList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CompanyItem from "./CompanyItem/CompanyItem";
import ReactGA from 'react-ga';
import RouteTracker from "./RouteTracker";

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

function App() {
    return (
        <Router>
            <div className="app">
                <Link to={"/"}>
                    <h3 className="text-center app-title ">IT Montenegro - Stats by Year</h3>
                </Link>
                <br/>
                <Switch>
                    <Route path="/company/:name">
                        <CompanyItem/>
                    </Route>
                    <Route path="/">
                        <YearList/>
                    </Route>
                </Switch>
                <footer className="footer text-white-50">
                    <p className="footer-link">Made by <a href={"https://github.com/stevyhacker"}>Stevan
                        Bogosavljević</a></p>
                    <p className="footer-link">Project and the dataset is open source <a
                        href={"https://github.com/stevyhacker/it-stats"}>@GitHub</a></p>
                    <p>Suggestions and improvements are welcome in the form of pull requests :)</p>
                </footer>
              <RouteTracker/>
            </div>
        </Router>
    );
}

export default App;
