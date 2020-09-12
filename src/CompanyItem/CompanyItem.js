import React from 'react';
import './CompanyItem.css'

const formatter = new Intl.NumberFormat('de-DE', {
    style: 'decimal',
    currency: 'EUR',
});

function CompanyItem(props) {
    return (
        <tr className="table-active text-white companyItem">
            <td>{props.item.name}</td>
            <td>{formatter.format(props.item.totalIncome)} €</td>
            <td>{formatter.format(props.item.profit)} €</td>
            <td>{props.item.employeeCount}</td>
        </tr>
    );
}

export default CompanyItem