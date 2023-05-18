import fetchRepoAPI from "../../apis/fetchRepo";
import { getDatesFromToday } from "../../utils/date";

// Action Types
export const FETCH_REPO_START = "FETCH_REPO_START";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";
export const FETCH_REPO_FAILURE = "FETCH_REPO_FAILURE";

// Action Creators
export const fetchRepoStart = () => {
  return {
    type: FETCH_REPO_START,
  };
};

export const fetchRepoSuccess = (repo, isScrolling = false) => {
  return {
    type: FETCH_REPO_SUCCESS,
    payload: { repo, isScrolling },
  };
};

export const fetchRepoFailure = (error) => {
  return {
    type: FETCH_REPO_FAILURE,
    payload: error,
  };
};

export const fetchRepo = (page, date, isScrolling) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRepoStart());

      const response = await fetchRepoAPI(page, getDatesFromToday(date));
      const data = response.data;

      dispatch(fetchRepoSuccess(data.items, isScrolling));
    } catch (error) {
      dispatch(fetchRepoFailure(error.message));
    }
  };
};
