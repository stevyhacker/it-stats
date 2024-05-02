"use client";

import React, {useState} from "react";
import "./YearList.css";
import YearItem from "../YearItem/YearItem";
import statsData from "@/assets/stats.json";

const YearList = () => {
    const [selectedYear, setSelectedYear] = useState<string>("2023");

    function selectYear(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e.currentTarget.textContent);
        setSelectedYear(e.currentTarget.textContent);
    }

    function ifSelected(year) {
        return year === selectedYear ? " bg-primary" : "";
    }

    return (
        <div className={"overflow-auto"}>
            <div className={"btn-group mb-3"}>
                {statsData.map((item) => (
                    <button
                        className={"year-tab btn text-white border" + ifSelected(item.year)}
                        key={item.year}
                        onClick={selectYear}
                    >
                        {item.year}
                    </button>
                ))}
            </div>

            <YearItem
                key={selectedYear}
                item={statsData.find((item) => item.year === selectedYear)}
            />
        </div>
    );
};

export default YearList;
