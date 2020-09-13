import React from 'react';
import {Bar} from "react-chartjs-2";
import {Line} from "react-chartjs-2";
import './CompanyCharts.css'


function CompanyCharts(props) {

    let data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#89ff56',
                '#ba45bf',
                '#0620a0'
            ]
        }]
    };

    props.companyList.reverse()

    let year = 2015
    props.companyList.forEach(company => {
        data.labels.push(year);
        year++;
        data.datasets[0].data.push(company.employeeCount);
    })

    return (
        <div>
            <div className="chart-list">
                <h5 className="text-center text-white-50 ">Number of employees per year</h5>
                <div className="chart-container">
                    <Bar width={'500'}
                         height={'500'}
                         data={data}/>
                    <Line width={'500'}
                          height={'500'}
                          data={data}/>
                </div>
            </div>
        </div>
    );
}

export default CompanyCharts;
