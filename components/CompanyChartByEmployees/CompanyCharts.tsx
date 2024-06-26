import React from 'react';
import {Bar} from "react-chartjs-2";
import './CompanyCharts.css'
import statsData from "@/assets/stats.json";
import _BootstrapTable from "react-bootstrap-table-next";
import {Chart, registerables} from "chart.js";

const BootstrapTable = _BootstrapTable as React.ElementType;
Chart.register(...registerables);

Chart.defaults.color = '#fff';
Chart.defaults.font.size = 14;

const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "EUR",
});

const columnStyle = {
    fontSize: "1.1rem",
    textAlign: "right",
};

const headerStyle1 = {
    color: "#c4c0c0",
    fontSize: "1rem",
    backgroundColor: "#48316e",
    whiteSpace: "nowrap",
    width: "12rem",
    textAlign: "center",
};

const headerStyle2 = {
    color: "#c4c0c0",
    fontSize: "1rem",
    backgroundColor: "#422966",
    whiteSpace: "nowrap",
    width: "12rem",
    textAlign: "center",
};

const headerStyle3 = {
    color: "#c4c0c0",
    fontSize: "1rem",
    backgroundColor: "#48316e",
    whiteSpace: "nowrap",
    width: "10rem",
    textAlign: "center",
};

const headerStyle4 = {
    color: "#c4c0c0",
    fontSize: "0.85rem",
    backgroundColor: "#422966",
    whiteSpace: "nowrap",
    width: "12rem",
    textAlign: "center",
};

function CompanyCharts({params}: { params: { name: string } }) {
    const companyName = params.name;

    const columns = [
        {
            text: "Name",
            dataField: "name",
            sort: true,
            headerStyle: headerStyle2,
            style: {
                fontWeight: "bold",
                fontSize: "1.25rem",
            },
        },
        {
            text: "Total Revenue",
            dataField: "totalIncome",
            formatter: currencyFormatter,
            sort: true,
            headerStyle: headerStyle1,
            style: columnStyle,
        },
        {
            text: "Profit",
            dataField: "profit",
            formatter: currencyFormatter,
            sort: true,
            headerStyle: headerStyle2,
            style: columnStyle,
        },
        {
            text: "Employees",
            dataField: "employeeCount",
            sort: true,
            headerStyle: headerStyle3,
            style: columnStyle,
        },
        {
            text: "Average Pay*",
            dataField: "averagePay",
            formatter: currencyFormatter,
            sort: true,
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                if (order === "asc") {
                    return rowA.averagePay - rowB.averagePay;
                }
                return rowB.averagePay - rowA.averagePay;
            },
            headerStyle: headerStyle2,
            align: "right",
            style: {columnStyle},
        },
        {
            text: "Revenue per Employee",
            dataField: "incomePerEmployee",
            formatter: currencyFormatter,
            sort: true,
            align: "right",
            headerStyle: headerStyle4,
            style: { columnStyle },
        },
        {
            text: "Year",
            dataField: "year",
            sort: true,
            align: "right",
            headerStyle: headerStyle1,
            style: { columnStyle },
        },
    ];

    function currencyFormatter(cell, row) {
        return (
            <span className={"money-label"}>{formatter.format(cell)} €</span>
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
                    fontColor: '#fff'
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
                    fontColor: '#fff'
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#fff',
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
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#ffffff'
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    fontColor: '#ffffff',
                    defaultFontStyle: 'Arial'
                }
            }]
        }
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

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

                <BootstrapTable
                    keyField="id"
                    wrapperClasses="table-responsive"
                    data={companyData}
                    columns={columns}
                    hover={true}
                    rowClasses={"text-white companyItem"}
                />

                <div className="chart-container">

                    <h5 className="text-center chart-title ">Employees per year</h5>


                    <Bar className={"mb-4"}
                        width={'100'}
                         height={'50'}
                         data={data}
                         options={options}/>

                    <h5 className="text-center chart-title ">Profit per year</h5>

                    <Bar className={"mb-4"}
                        width={'100'}
                         height={'50'}
                         data={profitData}
                         options={options}/>

                    <h5 className="text-center chart-title ">Income per year</h5>

                    <Bar className={"mb-2"}
                        width={'100'}
                         height={'50'}
                         data={incomeData}
                         options={options}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CompanyCharts;
