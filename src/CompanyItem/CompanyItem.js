import React from 'react';
import './CompanyItem.css'
import {useLocation} from 'react-router-dom'
import statsData from '../assets/stats.json'
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";
import {Collapse} from "react-collapse";
import CompanyCharts from "../CompanyChartByEmployees/CompanyCharts";

function CompanyItem() {

    let location = useLocation();
    console.log(location.pathname);
    let companyData = []
    statsData.forEach(year =>
        year.companyList.forEach(company => {
            if (location.pathname.includes(company.name))
                companyData.push(company);
        })
    )
    return (
        <div>

            <h3 className="text-white text-center">Company : {location.pathname.slice(9,location.pathname.length )}</h3>

            <CompanyCharts companyList={companyData}/>

        </div>
    );
}

export default CompanyItem