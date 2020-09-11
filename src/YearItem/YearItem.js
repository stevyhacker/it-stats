import React from 'react';
import CompanyItem from "../CompanyItem/CompanyItem";

function YearItem(props) {
    return (
        <div>
            <h4 className="text-white text-center"> {props.item.year}</h4>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Total Income</th>
                    <th scope="col">Profit</th>
                    <th scope="col">Employees</th>
                </tr>
                </thead>
                <tbody>
                    {props.item.companyList.map(item => (<CompanyItem key={item.id} item={item}/>))}
                </tbody>
                <br/>
            </table>
        </div>
    );
}

export default YearItem
