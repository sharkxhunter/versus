export const chartsConfig = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#4d4d4d",
        fontSize: "10px",
        fontFamily: "Satoshi-Variable",
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#4d4d4d",
        fontSize: "10px",
        fontFamily: "Satoshi-Variable",
        fontWeight: 500,
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    padding: {
      right: 10,
      bottom: 0,
      left: 10,
      top: 0,
    },
  },
  fill: {
    opacity: 1.0,
  },
  tooltip: {
    theme: "dark",
  },
};

export default chartsConfig;
