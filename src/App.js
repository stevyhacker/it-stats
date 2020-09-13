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

function App() {
    return (
        <Router>
            <div className="app">
                <Link to={"/"}>
                    <h3 className="text-center font-weight-bolder text-white ">IT Montenegro - Stats by Year</h3>
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
            </div>
        </Router>
    );
}

export default App;
