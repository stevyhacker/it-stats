import React from 'react';
import {Bar, HorizontalBar} from "react-chartjs-2";
import {Line} from "react-chartjs-2";
import './CompanyCharts.css'
import statsData from "../assets/stats.json";


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
                fontColor: 'white'
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
                    <Bar width={'1000'}
                         height={'500'}
                         options={options}
                         data={data}/>

                    <h5 className="text-center chart-title text-white-50 ">Profit per year</h5>

                    <Bar width={'1000'}
                         height={'500'}
                         options={optionsLegend}
                         data={profitData}/>

                    <h5 className="text-center chart-title text-white-50 ">Income per year</h5>

                    <Bar width={'1000'}
                         height={'500'}
                         options={optionsLegend}
                         data={incomeData}/>
                </div>
            </div>
        </div>
    );
}

export default CompanyCharts;
