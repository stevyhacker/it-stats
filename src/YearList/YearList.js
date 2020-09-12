import React from 'react';
import './YearList.css'
import YearItem from "../YearItem/YearItem";
import statsData from '../assets/stats.json'

function YearList() {
    return <div>
        <h3 className="text-center font-weight-bolder text-white ">Stats by Year</h3>
        <h5 className="text-center text-white-50 ">Sorted by total income</h5>
        <br/>
        <div>
            <div> {statsData.map(item => (<YearItem key={item.id} item={item}/>))} </div>
        </div>
    </div>
}

export default YearList