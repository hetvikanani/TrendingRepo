import fetchChartAPI from "../../apis/fetchChart";

export const FETCH_CHART_START = "FETCH_CHART_START";
export const FETCH_CHART_SUCCESS = "FETCH_CHART_SUCCESS";
export const FETCH_CHART_ERROR = "FETCH_CHART_ERROR";

const fetchChartStart = () => {
  return { type: FETCH_CHART_START };
};

const fetchChartSuccess = (data) => {
  return { type: FETCH_CHART_SUCCESS, payload: data };
};

const fetchChartError = (error) => {
  return { type: FETCH_CHART_ERROR, payload: error };
};

const fetchChart = (owner, repo) => {
  return async (dispatch) => {
    try {
      dispatch(fetchChartStart());

      const { data } = await fetchChartAPI(owner, repo);
      if (data && data.length > 0) {
        dispatch(fetchChartSuccess(data));
      } else {
        dispatch(fetchChartSuccess([]));
      }
    } catch (error) {
      dispatch(fetchChartError(error));
    }
  };
};

export default fetchChart;
