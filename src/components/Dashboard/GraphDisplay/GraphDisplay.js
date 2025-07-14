import * as React from "react";
import "./GraphDisplay.css";
import {AreaChart, ResponsiveContainer, Tooltip, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import Chart from "../../common/Chart/Chart";

export default function (props) {
    const [showPrice, setShowPrice] = React.useState(true);
    let data = {
        priceStats: [[1, 1], [2, 2], [3, 3]],
        volumeStats: [[4, 4], [5, 5], [6, 6]]
    }
    const clickTab = React.useMemo(() => () => setShowPrice(v => !v), []);
    return (
        <div className="GraphDisplay">
            <div className="tab-wrapper">
                <button className="selected" onClick={clickTab}>
                    <p>Price</p>
                </button>
                <button className="selected" onClick={clickTab}>
                    <p>Volume</p>
                </button>
            </div>
            <Chart/>
        </div>
    );
}

const options = {
    chart: {
        type: "areaspline",
        margin: [5, 15, 20, 15],
        height: "180px",
        width: null,
        spacing: [20, 20, 20, 20],
        renderTo: "container",
    },
};

const overviewData = [


    {
        month: "Apr",
        volume: 2000
    },
    {
        month: "May",
        volume: 1600
    },
    {
        month: "June",
        volume: 4400
    }

];

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
