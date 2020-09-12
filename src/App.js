import React from 'react';
import './App.css';
import YearList from "./YearList/YearList";

function App() {
    return (
        <div className="app">

            <section>
                <YearList/>
            </section>
            <footer className="footer text-white-50" >
                <p className="footer-link">Made by <a href={"https://github.com/stevyhacker"}>Stevan Bogosavljević</a></p>
                <p className="footer-link">Project and the dataset is open source <a href={"https://github.com/stevyhacker/it-stats"}>@GitHub</a></p>
                <p >Suggestions and improvements are welcome in the form of pull requests :)</p>
            </footer>

        </div>
    );
}

export default App;
