import React from 'react';
import './CompanyItem.css'
import {useLocation} from 'react-router-dom'
import CompanyCharts from "../CompanyChartByEmployees/CompanyCharts";

function CompanyItem() {

    let location = useLocation();
    console.log(location.pathname);
    const companyName = location.pathname.slice(9,location.pathname.length )
    return (
        <div>

            <h3 className="text-white text-center">Company : {companyName}</h3>

            <CompanyCharts company={companyName}/>

        </div>
    );
}

export default CompanyItem