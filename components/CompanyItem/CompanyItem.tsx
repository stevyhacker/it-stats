"use client";

import React from 'react';
import './CompanyItem.css'
import CompanyCharts from "../CompanyChartByEmployees/CompanyCharts";

function CompanyItem({ params }: { params: { name: string } }) {

return (
    <div>
        <h3 className="text-white text-center company-title">Company : {params.name}</h3>
        <CompanyCharts params={params}/>
    </div>
);
}

export default CompanyItem
