import React from 'react';
import './YearList.css'
import YearItem from "../YearItem/YearItem";
import statsData from '../assets/stats.json'

function YearList() {
    return <div className="yearList">
        <h3 className="text-center font-weight-bolder text-white ">Montenegro IT Stats by Year</h3>
        <br/>
        <div>
            <div>  {statsData.map(item => (<YearItem key={item.id} item={item}/>))} </div>
        </div>
    </div>
}

export default YearList