import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import fetchChart from "../../redux/chart/action";
import Loading from "../Loading";
import { formatDate } from "../../utils/date";

const LineChart = ({ owner, repo }) => {
  const [graphType, setGraphType] = useState(1);

  const dispatch = useDispatch();

  const { loading, chartData, error } = useSelector((store) => {
    return {
      loading: store.chart.loading,
      chartData: store.chart.data,
      error: store.chart.error,
    };
  });

  useEffect(() => {
    dispatch(fetchChart(owner, repo));
  }, [owner, repo, dispatch]);

  const originalData = [
    {
      name: graphType === 1 ? "Addition" : "Deletion",
      data: chartData.map((data) =>
        graphType === 1 ? data.addition : data.deletion
      ),
    },
  ];

  const timeData = chartData.map((data) => formatDate(data.time));
  console.error(error);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {originalData[0].data && originalData[0].data.length > 0 ? (
            <>
              <FormControl>
                <Select
                  value={graphType}
                  label="Changes"
                  onChange={(e) => {
                    setGraphType(e.target.value);
                  }}
                >
                  <MenuItem value={1}>Addition</MenuItem>
                  <MenuItem value={2}>Deletion</MenuItem>
                </Select>
              </FormControl>

              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  title: {
                    text: "Addition/Deletion",
                  },
                  xAxis: {
                    categories: timeData,
                  },
                  series: originalData,
                }}
              />
            </>
          ) : (
            "Chart Data Not Found For Addition/Deletion "
          )}
        </div>
      )}
    </>
  );
};

export default LineChart;
