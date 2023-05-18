import {
  FETCH_REPO_START,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE,
} from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REPO_SUCCESS: {
      if (action.payload.isScrolling)
        return {
          ...state,
          loading: false,
          data: [...state.data, ...action.payload.repo],
        };
      else
        return {
          ...state,
          loading: false,
          data: action.payload.repo,
        };
    }
    case FETCH_REPO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
