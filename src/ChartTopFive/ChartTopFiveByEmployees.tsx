import React from 'react';
import {Pie} from "react-chartjs-2";
import {ArcElement, Chart} from "chart.js";

Chart.register(ArcElement);


function ChartTopFiveByEmployees(props: { companyList: Iterable<unknown> | ArrayLike<unknown>; }) {

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
        }],
        legend: {
            labels: {
                fontColor: 'white',
                defaultFontSize: 20
            }
        }
    };

    const companyList = Array.from(props.companyList)

    companyList.sort(function (a, b) {
        if (a.employeeCount < b.employeeCount) return 1;
        if (a.employeeCount > b.employeeCount) return -1;
        return 0;
    });

    const topFive = companyList.slice(0, 5)

    topFive.forEach(company => {
        data.labels.push(company.name);
        data.datasets[0].data.push(company.employeeCount);
    })

    return (
        <React.Fragment>
            <div style={{width: '25%', textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <p className="text-center table-label ">Top 5 companies by number of employees</p>
                <Pie width={200}
                     height={60}
                     data={data}/>
            </div>
        </React.Fragment>
    );
}

export default ChartTopFiveByEmployees;
