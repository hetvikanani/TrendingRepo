import { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../Loading";
import { formatDate } from "../../utils/date";
import fetchContributor from "../../redux/contributor/action";

export default function Contributor({ owner, repo }) {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((store) => {
    return {
      loading: store.contributor.loading,
      data: store.contributor.data,
      error: store.contributor.error,
    };
  });
  const chartData = data?.map((z) => ({
    name: z.author.login,
    data: z.weeks.map((xx) => xx.c),
  }));

  const weeks = data[0]?.weeks?.map((week) =>
    formatDate(new Date(week.w * 1000))
  );

  useEffect(() => {
    dispatch(fetchContributor(owner, repo));
  }, [owner, repo, dispatch]);

  console.error(error);
  return (
    <>
      {loading ? (
        <Loading />
      ) : chartData.length > 0 ? (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              title: {
                text: "Contribution Chart",
              },
              xAxis: {
                categories: weeks,
              },
              series: chartData,
            }}
          />
        </div>
      ) : (
        "Chart Data Not Found For Contributions"
      )}
    </>
  );
}
