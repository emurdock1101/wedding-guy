import * as React from "react";

import ApexOptions from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
  const series = [
    {
      name: "data1",
      data: [44, 55],
      fillColor: "#F44336",
    },
    {
      name: "data2",
      data: [53, 32],
      fillColor: "#E91E63",
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
      height: 430,
    },
    xaxis: {
      categories: ["Openness to Experience", "Conscientiousness"],
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    dataLabels: {
      enabled: true,
      offsetX: -10,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    // theme: {
    //     palette: "palette2"
    // }
    // colors: ["red", "pink"],
    // fill: {
    //     colors: ['#F44336', '#E91E63', '#9C27B0']
    //   }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={430} />
    </div>
  );
};

export default BarChart;
