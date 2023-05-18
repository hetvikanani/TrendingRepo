import {
  FETCH_CHART_ERROR,
  FETCH_CHART_START,
  FETCH_CHART_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHART_SUCCESS: {
      return {
        ...state,
        data: action.payload.map(([timestamp, addition, deletion]) => ({
          time: new Date(timestamp * 1000),
          addition,
          deletion: deletion * -1,
        })),
        loading: false,
      };
    }
    case FETCH_CHART_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default chartReducer;
