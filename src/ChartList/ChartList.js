import React from 'react';
import statsData from '../assets/stats.json'
import {Pie} from 'react-chartjs-2';
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";


const ChartList = props => {
    return (
        <div>

            <h3 className="text-center font-weight-bolder text-white ">Montenegro IT</h3>

            <div>
                <div> {statsData.map(item => (<ChartTopFiveByEmployees key={item.id} item={item}/>))} </div>
            </div>

        </div>
    );
};


export default ChartList;
