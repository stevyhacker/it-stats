import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import './YearItem.css'
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";

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

    return (
        <div>
            <h4 className="text-white text-center"> {props.item.year}</h4>
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
                            <BootstrapTable rowClasses={"text-white companyItem"} {...props.baseProps}/>
                        </div>
                    )
                }
            </ToolkitProvider>

        </div>
    );
}

export default YearItem
