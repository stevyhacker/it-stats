import React from 'react';
import './CompanyItem.css'
import {useLocation} from 'react-router-dom'
import CompanyCharts from "../CompanyChartByEmployees/CompanyCharts";

function CompanyItem() {

    let location = useLocation();
    console.log(location.pathname);
    const companyName = location.pathname.slice(9,location.pathname.length )
    console.log(decodeURI(companyName));
    return (
        <React.Fragment>

            <h3 className="text-white text-center company-title">Company : {decodeURI(companyName)}</h3>

            <CompanyCharts company={companyName}/>

        </React.Fragment>
    );
}

export default CompanyItem
