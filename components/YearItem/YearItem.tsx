"use client";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
    Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import "./YearItem.css";
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";

import "./ResponsiveTable.css";
import HeroNumbers from "../HeroNumbers/HeroNumbers";
import {useRouter} from "next/navigation";
import {Chart, registerables} from "chart.js";

const {SearchBar} = Search;

Chart.register(...registerables);

Chart.defaults.color = "#fff";
Chart.defaults.font.size = 14;

const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "EUR",
});

function currencyFormatter(cell, row) {
    return <span className={"money-label"}>{formatter.format(cell)} €</span>;
}

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
        text: "Net wage costs",
        dataField: "netPayCosts",
        formatter: currencyFormatter,
        sort: true,
        headerStyle: headerStyle1,
        align: "right",
        style: {columnStyle},
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
        text: "Revenue per employee",
        dataField: "incomePerEmployee",
        formatter: currencyFormatter,
        sort: true,
        align: "right",
        headerStyle: headerStyle4,
        style: {columnStyle},
    },
];

const defaultSorting = [
    {
        dataField: "totalIncome",
        order: "desc",
    },
];

function YearItem(props) {

    // let initiallyOpened = false
    if (Number.parseInt(props.item.year) < 2020) {
        // @ts-ignore
        columns[3].hidden = true;
        // @ts-ignore
        columns[5].hidden = true;
    } else {
        // @ts-ignore
        columns[4].hidden = false;
        // @ts-ignore
        columns[5].hidden = false;
    }

    const router = useRouter();

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            router.push("/company/" + row.name);
            // console.log(`clicked on row with index: ${rowIndex}`);
        },
        onMouseEnter: (e, row, rowIndex) => {
            // console.log(`enter on row with index: ${rowIndex}`);
        },
    };

    // const data = require("../../src/assets/stats.json");
    // data.forEach((year) => {
    //     year.companyList.forEach((company) => {
    //         company.incomePerEmployee =
    //             company.totalIncome / company.employeeCount;
    //         company.incomePerEmployee = Math.round(company.incomePerEmployee);
    //     });
    // });
    // console.log(data);

    return (
        <div>
            <HeroNumbers item={props.item}/>

            <ToolkitProvider
                keyField="id"
                data={props.item.companyList}
                columns={columns}
                condensed={true}
                search
            >
                {(props) => (
                    <div>
                        <div className={"searchBar"}>
                            <SearchBar
                                {...props.searchProps}
                                placeholder="Search by name"
                            />
                        </div>
                        <p className=" table-label ">
                            Companies sorted by Total Revenue
                        </p>
                        <BootstrapTable
                            defaultSorted={defaultSorting}
                            wrapperClasses="table-responsive"
                            rowEvents={rowEvents}
                            hover={true}
                            rowClasses={"text-white yearItem"}
                            {...props.baseProps}
                        />
                    </div>
                )}
            </ToolkitProvider>
            <ChartTopFiveByEmployees companyList={props.item.companyList}/>
        </div>
    );
}

export default YearItem;
