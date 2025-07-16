import React, {useEffect, useState} from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {useTheme} from "@mui/material";

let symbol = ["BTC"];

// Get time-series data
let dataUrl =
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
    symbol +
    "&tsym=USD&limit=400";

// Get current price
let priceUrl =
    "https://min-api.cryptocompare.com/data/price?fsym=" + symbol + "&tsyms=USD";

function Chart() {
    const [appState, setAppState] = useState({
        loading: false,
        data: null,
        price: null,
    });

    const theme = useTheme();

    useEffect(() => {
        setAppState({loading: true});
        let arr = [];
        let arr1 = [];
        // Get price
        fetch(priceUrl)
            .then((response) => response.json())
            .then((data1) => {
                let price = data1.USD;
                arr1.push(price);
                // Get time-series
                fetch(dataUrl)
                    .then((res) => res.json())
                    .then((data) => {
                        for (const key of data.Data.Data) {
                            let data = [key.time * 1000, key.close];
                            arr.push(data);
                        }
                        setAppState({loading: false, data: arr, price: arr1});
                    });
            });
    }, [setAppState]);

    let data = appState.data;
    let price = appState.price;


    const options = {
        chart: {
            backgroundColor: 'var(--mui-palette-background-paper)',
            type: "area",
            height: "500px",
            margin: [20, 0, 50, 0],
            spacing: [0, 0, 0, 0], // [top, right, bottom, left]
            panning: false,
        },
        plotOptions: {
            series: {
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.color(theme.palette.primary.light).get("rgba")],
                        [1, Highcharts.color(theme.palette.primary.dark).setOpacity(0).get("rgba")],
                    ],
                },
            },
        },
        series: [
            {
                name: symbol,
                data: data,
                tooltip: {
                    valueDecimals: 2,
                },
            },
        ],
        xAxis: {
            gridLineWidth: 1,
            gridLineColor: 'var(--mui-palette-divider)',
            gridLineDashStyle: 'Dot',
            lineColor: 'var(--mui-palette-divider)',
            tickColor: 'var(--mui-palette-divider)',
            labels: {
                style: {
                    color: 'var(--mui-palette-text-primary)',
                }
            },
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineColor: 'var(--mui-palette-divider)',
            gridLineDashStyle: 'Dot',
            lineColor: 'var(--mui-palette-divider)',
            tickColor: 'var(--mui-palette-divider)',
            labels: {
                style: {
                    color: 'var(--mui-palette-text-primary)',
                }
            },
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        credits: {
            enabled: false
        },
    };

    return (
        <div className="chartContainer">
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
            />
        </div>
    );
}

export default Chart;
