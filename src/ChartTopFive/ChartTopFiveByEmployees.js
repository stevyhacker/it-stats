import React from 'react';
import {Pie} from "react-chartjs-2";


function ChartTopFiveByEmployees(props) {

    let data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#89ff56',
                '#ba45bf'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#89ff56',
                '#ba45bf'
            ]
        }]
    };

    props.companyList.sort(function(a, b) {
        if (a.employeeCount < b.employeeCount) return 1;
        if (a.employeeCount > b.employeeCount) return -1;
        return 0;
    });

    const topFive = props.companyList.slice(0, 5)

    topFive.forEach(company => {
        data.labels.push(company.name);
        data.datasets[0].data.push(company.employeeCount);
    })

    return (
        <div>
            <div>
                <h5 className="text-center text-white-50 ">Top 5 companies by number of employees</h5>
                <Pie width={200}
                     height={60}
                     data={data}/>
            </div>
        </div>
    );
}

export default ChartTopFiveByEmployees;
