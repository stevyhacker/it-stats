import React from 'react';
import './YearList.css'
import YearItem from "../YearItem/YearItem";
import statsData from '../assets/stats.json'

function YearList() {
    return <div>
        <div> {statsData.map(item => (<YearItem key={item.id} item={item}/>))} </div>
    </div>
}

export default YearList
