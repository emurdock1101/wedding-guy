import * as React from "react";

import ApexOptions from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

interface AspectsChart {
  height: string;
  width: string;
}

const AspectsChart: React.FC<AspectsChart> = (props: AspectsChart) => {
  const series = [
    {
      data: [22, 44],
    },
    {
      data: [33, 55],
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["(O) - Openness", "(O) - Int", "(C) - Boredom", "(C) - Sillyness"],
      title: {
        text: "Percentile of the population",
      },
      labels: {
        formatter: function (val: string) {
          return val + "%";
        },
      },
    },
    yaxis: {
      type: "numeric",
      min: 0,
      max: 100,
      formatter: function (value: number) {
        return value + "%";
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      enabled: false,
      shared: false,
      intersect: false,
      y: {
        formatter: function (value: number) {
          return value + "%";
        },
      },
      distributed: true,
    },
    dataLabels: {
      enabled: true,
      offsetX: -20,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
      formatter: function (value: number) {
        return value + "%";
      },
      distributed: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        dataLabels: {
          position: "top",
        },
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    theme: {
      palette: "palette2",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default AspectsChart;
