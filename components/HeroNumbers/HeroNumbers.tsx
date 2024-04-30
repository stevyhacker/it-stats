"use client";

import React, { useEffect, useState } from "react";

import statsData from "@/assets/stats.json";
import "./HeroNumbers.css";

const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "EUR",
});

function HeroNumbers(props) {
    const [yearlyGrowth, setYearlyGrowth] = useState<string>("0");
    const [totalIncome, setTotalIncome] = useState<string>("0");
    const [totalEmployees, setTotalEmployees] = useState<string>("0");
    const [totalEmployeesGrowth, setTotalEmployeesGrowth] =
        useState<string>("0");

    useEffect(() => {
        const currentYear = statsData.find(
            (item) => item.year === props.item.year
        );
        const previousYear = statsData.find(
            (item) => item.year === (parseInt(props.item.year) - 1).toString()
        );

        let previousYearTotalIncome = 0;
        let previousYearTotalEmployees = 0;
        let currentYearTotalEmployees = 0;
        let currentYearTotalIncome = 0;

        currentYear.companyList.forEach((company) => {
            if (company.totalIncome > 0) {
                currentYearTotalIncome += company.totalIncome;
                // console.log(company.name)
                // console.log(company.employeeCount)
                // console.log(currentYearTotalEmployees)
            }
            currentYearTotalEmployees += company.employeeCount;
        });

        setTotalEmployees(currentYearTotalEmployees.toString());
        setTotalIncome(currentYearTotalIncome.toString());

        if (currentYear.year !== "2015") {
            previousYear.companyList.forEach((company) => {
                if (company.totalIncome > 0) {
                    previousYearTotalIncome += company.totalIncome;
                }
                previousYearTotalEmployees += company.employeeCount;
            });

            const growth = (
                ((currentYearTotalIncome - previousYearTotalIncome) /
                    previousYearTotalIncome) *
                100
            ).toFixed(2);
            const employeeGrowth = (
                ((currentYearTotalEmployees - previousYearTotalEmployees) /
                    previousYearTotalEmployees) *
                100
            ).toFixed(2);

            setTotalEmployeesGrowth(employeeGrowth);
            setYearlyGrowth(growth);
        }
    }, [props.item.year]);

    return (
        <div className={"text-white border text-center mb-2"}>
            <h4 className="text-white yearItem mt-2">
                <p className="border"> {props.item.year}</p>
            </h4>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div className="card p-2 total-market-revenue-wrapper">
                            <div className="card-body">
                                <span className="card-title mb-5">
                                    Total market revenue
                                </span>
                                <h3 className="mt-1">
                                    {formatter.format(Number(totalIncome))} €
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div className="card p-2 total-revenue-growth-wrapper">
                            <div className="card-body">
                                <span>Total revenue growth</span>
                                <h3 className="mt-1">{yearlyGrowth}%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div className="card p-2 total-employees-wrapper">
                            <div className="card-body">
                                <span>Total employees</span>
                                <h3 className="mt-1">{totalEmployees}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div className="card p-2 total-employees-growth-wrapper">
                            <div className="card-body">
                                <span>Total employees growth</span>
                                <h3 className="mt-1">{totalEmployeesGrowth}%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroNumbers;
