import React from 'react';
import logo from './logo.svg';
import './App.css';
import YearList from "./YearList/YearList";

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <body>
            <YearList/>
            </body>
        </div>
    );
}

export default App;
