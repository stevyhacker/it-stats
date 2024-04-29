import React from 'react';
import {Pie} from "react-chartjs-2";
import {ArcElement, Chart} from "chart.js";

Chart.register(ArcElement);
Chart.defaults.color = '#fff';
Chart.defaults.font.size = 14;

interface Company {
    name: string;
    employeeCount: number;
    totalIncome: number;
    incomePerEmployee?: number;
}

function ChartTopFiveByEmployees(props: { companyList: Iterable<Company> | ArrayLike<unknown>; }) {

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
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                tooltip: {
                    bodyColor: 'blue'
                },
                legend: {
                    labels: {
                        color: 'blue',
                    },
                    position: 'top'
                }
            }
        }
        // options: {
        //     legend: {
        //         labels: {
        //             fontColor: "blue",
        //             fontSize: 18
        //         }
        //     },
        // },
        // options: {
        //     plugins: {  // 'legend' now within object 'plugins {}'
        //         legend: {
        //             labels: {
        //                 color: "#fff",  // not 'fontColor:' anymore
        //                 // fontSize: 18  // not 'fontSize:' anymore
        //                 font: {
        //                     size: 18 // 'size' now within object 'font {}'
        //                 }
        //             }
        //         }
        //     },
        // }
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                tooltip: {
                    bodyColor: 'blue'
                },
                legend: {
                    labels: {
                        color: 'blue',
                    },
                    position: 'top'
                }
            }
        }
    };

    // @ts-ignore
    const companyList : Company[] = Array.from(props.companyList)

    companyList.sort(function (a, b) {
        if (a.employeeCount < b.employeeCount) return 1;
        if (a.employeeCount > b.employeeCount) return -1;
        return 0;
    });

    const topFive = companyList.slice(0, 5)

    topFive.forEach(company => {
        data.labels.push(company.name);
        data.labels
        data.datasets[0].data.push(company.employeeCount);
    })

    return (
        <React.Fragment>
            <div style={{width: '25%', textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <p className="text-center table-label ">Top 5 companies by number of employees</p>
                <Pie width={200}
                     height={60}
                     data={data}
                />
            </div>
        </React.Fragment>
    );
}

export default ChartTopFiveByEmployees;
