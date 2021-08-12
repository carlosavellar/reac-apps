import ChartBar from "./ChartBar";
import React from "react";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maximumPoints = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={maximumPoints}
            key={dataPoint.label}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

// Chart
// store all values intro a const contain all values
// store ion another const the Biggest array value
