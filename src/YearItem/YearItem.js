import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import './YearItem.css'
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";
import {Collapse} from 'react-collapse';
import { useHistory } from "react-router-dom";

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
        text: "Name", dataField: "name", sort: true,
        headerStyle: {
          color: '#c4c0c0',
          backgroundColor: '#422966',
          fontSize: '1rem',
        },
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
        headerStyle: {
          color: '#c4c0c0',
          fontSize: '1rem',
          backgroundColor: '#48316e',
        },
        style: {fontSize: '1.1rem'}
    },
    {
        text: "Profit", dataField: "profit",
        formatter: currencyFormatter, sort: true,
        headerStyle: {
          color: '#c4c0c0',
          fontSize: '1rem',
          backgroundColor: '#422966',
        },
        style: {fontSize: '1.1rem'}
    },
    {
        text: "Employees", dataField: "employeeCount", sort: true,
        headerStyle: {
          color: '#c4c0c0',
          fontSize: '1rem',
          backgroundColor: '#48316e',
        },
        style: {fontSize: '1.1rem'}
    },
    {
      text: "Average Pay*", dataField: "averagePay",
      formatter: currencyFormatter, sort: true,
      headerStyle: {
        color: '#c4c0c0',
        fontSize: '1rem',
        backgroundColor: '#422966',
      },
      style: {fontSize: '1.1rem'}
    },
  {
    text: "Net wage costs", dataField: "netPayCosts",
    formatter: currencyFormatter, sort: true,
    headerStyle: {
      color: '#c4c0c0',
      fontSize: '1rem',
      backgroundColor: '#422966',
    },
    style: {fontSize: '1.1rem'}
  }
]

const defaultSorting = [{
  dataField: 'totalIncome',
  order: 'desc'
}];


function YearItem(props) {

    let initiallyOpened = false
    if (props.item.year === '2020') initiallyOpened = true
    else {
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
                    search>
                    {
                        props => (
                            <div>
                                <div className={"searchBar"}>
                                    <SearchBar {...props.searchProps} />
                                </div>
                                <p className="text-center table-label ">Companies sorted by Total Income</p>
                                <BootstrapTable
                                  defaultSorted={defaultSorting}
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
