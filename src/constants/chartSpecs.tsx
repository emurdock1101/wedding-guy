// data for ocean chart
export const oceanSeries = [
  {
    data: [22, 33],
  },
];

// data for aspects chart
export const aspectsSeries = [
  {
    data: [22, 44],
  },
  {
    data: [33, 55],
  },
];

// options for aspects chart
export const aspectsOptions = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: ["(O) - Openness", "(O) - Intellect", "(C) - Boredom", "(C) - Sillyness"],
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
