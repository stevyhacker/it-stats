import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import './YearItem.css'
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";
import {Collapse} from 'react-collapse';

const {SearchBar} = Search;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'EUR',
});

function currencyFormatter(cell, row) {
    return (
        <span>{formatter.format(cell)} €</span>
    );
}

const columns = [
    {
        text: "Name", dataField: "name", sort: true, style: {
            fontWeight: 'bold',
            fontSize: '1.25rem'
        }
    },
    {
        text: "Total Income",
        dataField: "totalIncome",
        formatter: currencyFormatter,
        sort: true,
        style: {fontSize: '1.1rem'}
    },
    {
        text: "Profit", dataField: "profit", formatter: currencyFormatter, sort: true, style: {fontSize: '1.1rem'}
    },
    {
        text: "Employees", dataField: "employeeCount", sort: true, style: {fontSize: '1.1rem'}
    }
]

function YearItem(props) {

    let initiallyOpened = false
    if (props.item.year === '2019') initiallyOpened = true

    let [isOpened, toggleOpened] = useState(initiallyOpened);


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
                    search>
                    {
                        props => (
                            <div>
                                <div className={"searchBar"}>
                                    <SearchBar {...props.searchProps} />
                                </div>
                                <h5 className="text-center text-white-50 ">Sorted by total income</h5>
                                <BootstrapTable rowClasses={"text-white companyItem"} {...props.baseProps}/>
                            </div>
                        )
                    }
                </ToolkitProvider>
            </Collapse>
        </div>

    );
}

export default YearItem
