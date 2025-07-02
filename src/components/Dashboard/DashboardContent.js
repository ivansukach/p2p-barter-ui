import React from "react";
import GraphDisplay from "./GraphDisplay/GraphDisplay";
import MarketMetricsDisplay from "./MarketMetricsDisplay/MarketMetricsDisplay";
import BlocksDisplay from "./BlockDisplay/BlockDisplay";
import TxDisplay from "./TxDisplay/TxDisplay";
import ValidatorsDisplay from "./ValidatorsDisplay/ValidatorsDisplay";
import './DashboardContent.css';

export default function (props) {
    return (
        <div className="DashboardContent">
            <div className="MarketData">
                <MarketMetricsDisplay/>
                <GraphDisplay/>
            </div>
            <div className="">
                <BlocksDisplay/>
                <TxDisplay/>
            </div>
            <ValidatorsDisplay/>
        </div>
    );
}
