import React from 'react';
import statsData from "@/assets/stats.json";
import ChartTopFiveByEmployees from "../ChartTopFive/ChartTopFiveByEmployees";


function ChartList() {
    return (
        <React.Fragment>

            <h3 className="text-center font-weight-bolder text-white ">Montenegro IT</h3>

            <div>
                <div> {statsData.map((item) => (<ChartTopFiveByEmployees  companyList={item.companyList}/>))} </div>
            </div>

        </React.Fragment>
    );
}


export default ChartList;
