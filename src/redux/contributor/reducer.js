import {
  FETCH_CONTRIBUTOR_ERROR,
  FETCH_CONTRIBUTOR_START,
  FETCH_CONTRIBUTOR_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const contributorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTRIBUTOR_START: {
      return { ...state, loading: true };
    }
    case FETCH_CONTRIBUTOR_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FETCH_CONTRIBUTOR_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default contributorReducer;
