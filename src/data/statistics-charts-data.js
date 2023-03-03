import { chartsConfig } from "@/configs";
import { months } from "./month-names";

const salesValueChart = {
  type: "bar",
  height: 250,
  series: [
    {
      name: "Views",
      data: [7500, 9500, 8000, 8500, 10700],
    },
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#109494"
    ],
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["2019", "2020", "2021", "2022", "2023"],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      labels: {
        formatter: function (val, index) {
          if (val > 10000) return ">10M";
          if (val >= 8000) return "10M";
          if (val >= 6000) return "8M";
          if (val >= 4000) return "4M";
          if (val >= 2000) return "2M";
          return 0;
        }
      },
      tickAmount: 5,
      min: 0,
      max: 12000
    },
  },
};

const salesVolumeChart = {
  type: "bar",
  height: 250,
  series: [
    {
      name: "Views",
      data: [2700, 3700, 3000, 3300, 4400],
    },
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#944210"
    ],
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["2019", "2020", "2021", "2022", "2023"],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      labels: {
        formatter: function (val, index) {
          if (val >= 5000) return ">500k";
          if (val >= 4000) return "400k";
          if (val >= 3000) return "300k";
          if (val >= 2000) return "200k";
          if (val >= 1000) return "100k"
          return "0";
        }
      },
      tickAmount: 5,
      min: 0,
      max: 5000
    },
  },
};

const salesValueTrendChart = {
  type: "line",
  height: 250,
  series: [
    {
      name: "%SVS1",
      data: [75, 0, 65, 52, 80, 105, 38, 115, 18, 40, 62, 20],
    },
    {
      name: "%SVS2",
      data: [20, 47, 15, 97, 0, 47, 35, 25, 64, 37, 70, 90],
    }
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#5CF43A",
      "#1340E2",
    ],
    chart: {
      ...chartsConfig.chart,
      type: "line",
    },
    stroke: {
      curve: "smooth",
      width: "1"
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [...months],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 6,
      min: 0,
      max: 120
    },
  },
};

const salesVolumeTrendChart = {
  type: "line",
  height: 250,
  series: [
    {
      name: "%SVS1",
      data: [75, 0, 65, 52, 80, 105, 38, 115, 18, 40, 62, 20],
    },
    {
      name: "%SVS2",
      data: [20, 47, 15, 97, 0, 47, 35, 25, 64, 37, 70, 90],
    }
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#723AF4",
      "#A4133C",
    ],
    chart: {
      ...chartsConfig.chart,
      type: "line"
    },
    stroke: {
      curve: "smooth",
      width: "1"
    },
    legend: {
      position: "top",
      horizontalAlign: "left"
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [...months],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 6,
      min: 0,
      max: 120
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Sales value",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: salesValueChart,
  },
  {
    color: "white",
    title: "Sales Volume",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: salesVolumeChart,
  },
  {
    color: "white",
    title: "% Sales value trend",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: salesValueTrendChart,
  },
  {
    color: "white",
    title: "% Sales volume trend",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: salesVolumeTrendChart,
  },
];

export default statisticsChartsData;
