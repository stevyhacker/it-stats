import React from 'react';
import './CompanyItem.css'

function CompanyItem(props) {
    return (
        <tr className="table-active text-white companyItem">
            <th scope="row">{props.item.name}</th>
            <td>{props.item.totalIncome}€</td>
            <td>{props.item.profit}€</td>
            <td>{props.item.employeeCount}</td>
        </tr>
    );
}

export default CompanyItem