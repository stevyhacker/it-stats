import React from "react";

function Footer() {

    return <div>
        <footer className="footer text-white-50">
            <p>*Average pay is an approximation calculated by dividing total net wage costs <br/> for the year by the
                average number of employees and then dividing by 12 months.</p>
            <br/>
            <p className="footer-link">All the data was taken from: <a href={"https://eprijava.tax.gov.me"}>https://eprijava.tax.gov.me</a></p>
            <p className="footer-link">Project and the dataset is open source <a
                href={"https://github.com/stevyhacker/it-stats"}>@GitHub</a></p>
            <p>Suggestions and improvements are welcome in the form of pull requests :)</p>
            <p className="footer-link">Made by <a href={"https://github.com/stevyhacker"}>Stevan
                Bogosavljević</a></p>
        </footer>
    </div>
}


export default Footer
