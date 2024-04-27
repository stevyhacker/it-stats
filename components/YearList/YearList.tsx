"use client";

import React, {useState} from 'react';
import './YearList.css'
import YearItem from "../YearItem/YearItem";
import statsData from "@/assets/stats.json";

function YearList() {

    const [selectedYear, setSelectedYear] = useState<string>('2023');


    function selectYear(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e.currentTarget.textContent);
        setSelectedYear(e.currentTarget.textContent);
    }

    return <div className={"overflow-auto"}>

        <div className={"btn-group mb-4"}>
            {statsData.map(item => (
                <button className={"btn text-white border"} key={item.year} onClick={selectYear}>{item.year}</button>
            ))}
        </div>

        <YearItem key={selectedYear} item={statsData.find(item => item.year === selectedYear)}/>
    </div>
}

export default YearList
