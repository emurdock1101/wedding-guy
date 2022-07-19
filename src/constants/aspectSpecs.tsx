import { theme as thm } from "../theme";
type MyEnum = "center";
const centerTitle: MyEnum = "center";

// options for aspects chart
export const aspectOptions = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "O - Opn.",
      "O - Int.",
      "C - Ind.",
      "C - Ord.",
      "E - Ent.",
      "E - Asr.",
      "A - Com.",
      "A - Pol.",
      "N - Wit.",
      "N - Vol.",
    ],
    title: {
      text: "Percentile",
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
  },
  stroke: {
    show: true,
    width: 3,
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
    offsetX: -10,
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
      borderRadius: 5,
      dataLabels: {
        position: "top",
      },
      distributed: true,
      barHeight: "100%",
    },
  },
  legend: {
    show: false,
  },
  colors: [
    thm.palette.error.main,
    thm.palette.warning.main,
    thm.palette.success.main,
    thm.palette.primary.main,
    thm.palette.secondary.main,
  ],
  title: {
    text: "10 Aspects",
    align: centerTitle,
    margin: 5,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#263238",
    },
  },
  states: {
    active: {
      filter: {
        type: "none",
      },
    },
  },
};