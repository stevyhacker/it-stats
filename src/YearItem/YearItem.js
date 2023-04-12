import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import './YearItem.css'
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";
import {Collapse} from 'react-collapse';
import {useHistory} from "react-router-dom";
import {isMobile} from 'react-device-detect';
import './ResponsiveTable.css'

const {SearchBar} = Search;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'EUR',
});

function currencyFormatter(cell, row) {
    return (
        <span className={"money-label"}>{formatter.format(cell)} €</span>
    );
}

const columnStyle = {
    fontSize: '1.1rem',
    textAlign: 'center'
}

const headerStyle1 = {
    color: '#c4c0c0',
    fontSize: '1rem',
    backgroundColor: '#48316e',
    whiteSpace: "nowrap",
    width: '12rem',
    textAlign: 'center'
}

const headerStyle2 = {
    color: '#c4c0c0',
    fontSize: '1rem',
    backgroundColor: '#422966',
    whiteSpace: "nowrap",
    width: '12rem',
    textAlign: 'center'
}

const columns = [
    {
        text: "Name", dataField: "name", sort: true,
        headerStyle: headerStyle2,
        style: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
        }
    },
    {
        text: "Total Income",
        dataField: "totalIncome",
        formatter: currencyFormatter,
        sort: true,
        headerStyle: headerStyle1,
        style: columnStyle
    }, {
        text: "Profit", dataField: "profit",
        formatter: currencyFormatter, sort: true,
        headerStyle: headerStyle2,
        style: columnStyle
    }, {
        text: "Employees", dataField: "employeeCount", sort: true,
        headerStyle: headerStyle1,
        style: columnStyle
    }, {
        text: "Average Pay*", dataField: "averagePay",
        formatter: currencyFormatter, sort: true,
        headerStyle: headerStyle2,
        style: {columnStyle}
    }, {
        text: "Net wage costs", dataField: "netPayCosts",
        formatter: currencyFormatter, sort: true,
        headerStyle: headerStyle1,
        style: {columnStyle}
    }
]

const defaultSorting = [{
    dataField: 'totalIncome',
    order: 'desc'
}];


function YearItem(props) {

    let initiallyOpened = false
    if (props.item.year === '2022') {
        initiallyOpened = true
        columns[4].hidden = false
        columns[5].hidden = false
    }
    else if (props.item.year === '2020' || props.item.year === '2021') {
        columns[4].hidden = false
        columns[5].hidden = false
    } else {
        columns[4].hidden = true
        columns[5].hidden = true
    }

    let [isOpened, toggleOpened] = useState(initiallyOpened);

    const history = useHistory();

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            history.push("/company/" + row.name);
            console.log(`clicked on row with index: ${rowIndex}`);
        },
        onMouseEnter: (e, row, rowIndex) => {
            console.log(`enter on row with index: ${rowIndex}`);
        }
    };

    return (

        <div>
            <h4 onClick={() => toggleOpened(!isOpened)} className="text-white yearItem">
                <p className="border"> {props.item.year}</p>
            </h4>

            <Collapse isOpened={isOpened}>

                <ChartTopFiveByEmployees companyList={props.item.companyList}/>
                <ToolkitProvider
                    keyField="id"
                    data={props.item.companyList}
                    columns={columns}
                    bootstrap4={true}
                    condensed={true}
                    search>
                    {props => (
                        <div>
                            <div className={"searchBar"}>
                                <SearchBar {...props.searchProps} />
                            </div>
                            <p className="text-center table-label ">Companies sorted by Total Income</p>
                            <BootstrapTable
                                defaultSorted={defaultSorting}
                                wrapperClasses="table-responsive"
                                rowEvents={rowEvents}
                                rowClasses={"text-white companyItem"} {...props.baseProps}/>
                        </div>
                    )
                    }
                </ToolkitProvider>
            </Collapse>
        </div>
    );
}

export default YearItem
