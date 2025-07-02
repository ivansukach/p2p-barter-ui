import React, {useMemo} from "react";
import HighchartsReact from "highcharts-react-official";
import highcharts from "highcharts";

export default function({options, data, showAxis = true, displayMax = false}) {
	const graphOptions = useMemo(() => {
		const yAxisValues = []
		data.map(v => yAxisValues.push(v[1]))
		const [xMax, xMin, yMax, yMin] = [data[data.length - 1][0], data[0][0], Math.max(...yAxisValues), Math.min(...yAxisValues)];
		console.log("xmin", xMin);
		console.log("xmax", xMax);
		console.log("ymin", yMin);
		console.log("ymax", yMax);
		const tickPositions = [xMin, (3 * xMin + xMax) / 4, (xMin + xMax) / 2, (xMin + 3 * xMax) / 4, xMax];
		return {
			...defaultOptions,
			series: [
				{
					...series,
					data: data,
				},
			],
			yAxis: [
				{
					...yAxis,
					visible: showAxis,
					max: displayMax ? yMax + 0.00000000001 : yMax + (yMax + yMin) / 200,
					min: displayMax ? yMin - 0.00000000001 : yMin - (yMax + yMin) / 200,
					tickPixelInterval: 100,
					tickAmount: displayMax ? 100 : 5,
				},
			],
			xAxis: [
				{
					...xAxis,
					visible: showAxis,
					max: xMax,
					min: xMin,
					tickPositions,
					type: "datetime",
				},
			],
			...options,
		};
	}, [options, data, displayMax, showAxis]);
	// console.log(graphOptions);
	return <HighchartsReact highcharts={highcharts} options={graphOptions} />;
}

const xAxis = {
	visible: true,
	labels: {
		overflow: "allow",
		align: "center",
		formatter: function() {
			// return getHours(this.value);
			return this.value;
		},
		maxStaggerLines: 1,
	},
	minPadding: 0,
	maxPadding: 0,
	gridLineColor: "#eeeeee",
	tickPosition: "outside",
	tickColor: "transaprent",
	endOnTick: false,
};
const yAxis = {
	visible: true,
	opposite: true,
	endOnTick: true,
	gridLineColor: "#eeeeee",
	labels: {
		enabled: false,
		align: "left",
		x: 14,
		style: {
			color: "#4b525d",
			fontSize: "11px",
		},
		// formatter: function() {
		// 	return `${humanFormat(this.value)}`;
		// },
	},
	title: {
		text: "",
	},
	tickAmount: 5,
	tickPosition: "inside",
};
const series = {
	color: "#0073e6",
	fillColor: {
		linearGradient: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 1,
		},
		stops: [
			[
				0,
				highcharts
					.color("#0073e6")
					.setOpacity(0.6)
					.get("rgba"),
			],
			[
				0.6,
				highcharts
					.color("#0073e6")
					.setOpacity(0.2)
					.get("rgba"),
			],
			[
				1,
				highcharts
					.color("#ffffff")
					.setOpacity(0.05)
					.get("rgba"),
			],
		],
	},
};
// 대시보드 그래프 옵션정리
const defaultOptions = {
	credits: {
		enabled: false,
	},
	title: {
		text: "",
	},
	legend: {
		enabled: false,
	},
	chart: {
		type: "areaspline",
		margin: [20, 20, 20, 20],
		height: 45,
		width: 120,
	},
	plotOptions: {
		series: {
			states: {
				hover: {
					enabled: true,
					lineWidthPlus: 0,
					halo: {
						size: 0,
						opacity: 0,
					},
				},
				select: {
					enabled: false,
				},
			},
			plotOptions: {
				series: {
					states: {
						hover: {
							enabled: true,
							lineWidthPlus: 0,
							halo: {
								size: 0,
								opacity: 0,
							},
						},
						select: {
							enabled: false,
						},
					},
					allowPointSelect: false,
					marker: {
						enabled: false,
					},
				},
			},
			allowPointSelect: false,
			marker: {
				enabled: false,
			},
		},
	},
	tooltip: {
		enabled: true,
		backgroundColor: "#ffffff",
		borderColor: "#e6e6e6",
		borderRadius: 10,
		borderWidth: 1,
		headerShape: "callout",
		shadow: true,
		formatter: function() {
			return `<p>
			<span style='font-family: Montserrat,serif; font-size: 15px; font-weight: 500; font-stretch: normal; font-style: normal; line-height: 1.27; letter-spacing: normal; text-align: left; color: #222222'>
				${this.y}
			</span>
			<br />
			<span style='font-family: "Open Sans",serif; font-size: 11px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.8; letter-spacing: normal; text-align: left; color: #4b525d'>
				${this.x}
			</span>
			</p>
			`;
		},
		useHTML: true,
	},
};
