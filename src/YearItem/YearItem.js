import React from 'react';
import CompanyItem from "../CompanyItem/CompanyItem";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import './YearItem.css'

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
    {text: "Name", dataField: "name", sort: true},
    {text: "Total Income", dataField: "totalIncome", formatter: currencyFormatter, sort: true},
    {text: "Profit", dataField: "profit", formatter: currencyFormatter, sort: true},
    {text: "Employees", dataField: "employeeCount", sort: true},
]

function YearItem(props) {

    return (
        <div>
            <h4 className="text-white text-center"> {props.item.year}</h4>
            {/*<table className="table">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">Name</th>*/}
            {/*        <th scope="col">Total Income</th>*/}
            {/*        <th scope="col">Profit</th>*/}
            {/*        <th scope="col">Employees</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {props.item.companyList.map(item => (<CompanyItem key={item.id} item={item}/>))}*/}
            {/*    </tbody>*/}
            {/*    <br/>*/}
            {/*</table>*/}


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
