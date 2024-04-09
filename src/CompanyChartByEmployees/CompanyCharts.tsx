import React from 'react';
import {Bar} from "react-chartjs-2";
import './CompanyCharts.css'
import statsData from "../assets/stats.json";
import BootstrapTable from "react-bootstrap-table-next";
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'EUR',
});

const headerStyle1 = {
    color: '#c4c0c0',
    backgroundColor: '#48316e',
    width: '8rem',
}

function CompanyCharts(props) {

    const columns = [
        {
            text: "Name", dataField: "name", style: {
                fontWeight: 'bold',
                fontSize: '1.25rem'
            },
            headerStyle: headerStyle1
        },
        {
            text: "Total Income",
            dataField: "totalIncome",
            formatter: currencyFormatter,
            style: {fontSize: '1.1rem'},
            headerStyle: headerStyle1
        },
        {
            text: "Profit", dataField: "profit",
            formatter: currencyFormatter,
            style: {fontSize: '1.1rem'},
            headerStyle: headerStyle1
        },
        {
            text: "Employees", dataField: "employeeCount", style: {fontSize: '1.1rem'},
            headerStyle: headerStyle1
        },
        {
            text: "Income per Employee", dataField: "incomePerEmployee",
            formatter: currencyFormatter,
            style: {fontSize: '1.1rem'},
            headerStyle: headerStyle1
        },
        {
            text: "Year", dataField: "year", style: {fontSize: '1.1rem'},
            headerStyle: headerStyle1
        }
    ]

    function currencyFormatter(cell, row) {
        return (
            <span>{formatter.format(cell)} €</span>
        );
    }

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
        }],
        legend: {
            display: false,
            chart: {
                defaultFontSize: 30,
                fontColor: '#fff'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 5
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 2,
                    fontColor: '#efe6e6'
                }
            }]
        }
    };

    let profitData = {
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
        }],
        legend: {
            display: false,
            chart: {
                defaultFontSize: 30,
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#efe6e6'
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#efe6e6',
                    defaultFontStyle: 'Arial'
                }
            }]
        }
    };

    let incomeData = {
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
        }],
        legend: {
            display: false,
            chart: {
                defaultFontSize: 30,
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#efe6e6'
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#efe6e6',
                    defaultFontStyle: 'Arial'
                }
            }]
        }
    };

    const companyName = decodeURI(props.company);
    let companyData = []
    let yearly = Array.from(statsData)
    yearly.reverse()
    yearly.forEach(item =>
        item.companyList.forEach(company => {
            if (companyName === company.name) {
                data.labels.push(item.year);
                profitData.labels.push(item.year);
                incomeData.labels.push(item.year);
                data.datasets[0].data.push(company.employeeCount);
                profitData.datasets[0].data.push(company.profit);
                incomeData.datasets[0].data.push(company.totalIncome);
                company.year = item.year;
                companyData.push(company);
            }
        })
    )

    return (
        <React.Fragment>
            <div className="chart-list">
                <h5 className="text-center chart-title ">Number of employees per year</h5>
                <div className="chart-container">
                    <Bar width={'100'}
                         height={'50'}
                         data={data}/>

                    <h5 className="text-center chart-title ">Profit per year</h5>

                    <Bar width={'100'}
                         height={'50'}
                         data={profitData}/>

                    <h5 className="text-center chart-title ">Income per year</h5>

                    <Bar width={'100'}
                         height={'50'}
                         data={incomeData}/>
                </div>
                <BootstrapTable
                    keyField="id"
                    data={companyData}
                    wrapperClasses="table-responsive"
                    columns={columns}
                    sort={{dataField: 'year', order: 'desc'}}
                    hover={true}
                    rowClasses={"text-white companyItem"}
                />
            </div>
        </React.Fragment>
    );
}

export default CompanyCharts;
