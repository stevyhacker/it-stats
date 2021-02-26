import React from 'react';
import {Bar, HorizontalBar} from "react-chartjs-2";
import {Line} from "react-chartjs-2";
import './CompanyCharts.css'
import statsData from "../assets/stats.json";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'EUR',
});

function CompanyCharts(props) {

    const columns = [
        {
            text: "Name", dataField: "name", style: {
                fontWeight: 'bold',
                fontSize: '1.25rem'
            },
            headerStyle: {
              color: '#c4c0c0',
              backgroundColor: '#422966',
            }
        },
        {
            text: "Total Income",
            dataField: "totalIncome",
            formatter: currencyFormatter,
            style: {fontSize: '1.1rem'},
            headerStyle: {
              color: '#c4c0c0',
              backgroundColor: '#48316e',
            },
        },
        {
            text: "Profit", dataField: "profit", formatter: currencyFormatter, style: {fontSize: '1.1rem'},
            headerStyle: {
              color: '#c4c0c0',
              backgroundColor: '#422966',
            }
        },
        {
            text: "Employees", dataField: "employeeCount", style: {fontSize: '1.1rem'},
            headerStyle: {
              color: '#c4c0c0',
              backgroundColor: '#48316e',
            }
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
        }]
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
        }]
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
        }]
    };

    const options = {
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
    }

    const optionsLegend = {
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
    }

    let companyData = []
    let yearly = Array.from(statsData)
    yearly.reverse()
    yearly.forEach(item =>
        item.companyList.forEach(company => {
            if (props.company === company.name) {
                data.labels.push(item.year);
                profitData.labels.push(item.year);
                incomeData.labels.push(item.year);
                data.datasets[0].data.push(company.employeeCount);
                profitData.datasets[0].data.push(company.profit);
                incomeData.datasets[0].data.push(company.totalIncome);
                companyData.push(company);
            }
        })
    )

    return (
        <div>
            <div className="chart-list">
                <h5 className="text-center chart-title text-white-50 ">Number of employees per year</h5>
                <div className="chart-container">
                    <Bar width={'100'}
                         height={'50'}
                         options={options}
                         data={data}/>

                    <h5 className="text-center chart-title text-white-50 ">Profit per year</h5>

                    <Bar width={'100'}
                         height={'50'}
                         options={optionsLegend}
                         data={profitData}/>

                    <h5 className="text-center chart-title text-white-50 ">Income per year</h5>

                    <Bar width={'100'}
                         height={'50'}
                         options={optionsLegend}
                         data={incomeData}/>

                    <BootstrapTable
                        keyField="id"
                        data={companyData}
                        columns={columns}
                        rowClasses={"text-white companyItem"}
                    />

                </div>
            </div>
        </div>
    );
}

export default CompanyCharts;
