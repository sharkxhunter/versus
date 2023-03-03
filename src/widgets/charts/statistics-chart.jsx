import PropTypes from "prop-types";
import Chart from "react-apexcharts";

export function StatisticsChart({ chart }) {
  return (
    <Chart {...chart} className="w-full" />
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  chart: PropTypes.object.isRequired,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
