import fetchContributorAPI from "../../apis/fetchContributor";

export const FETCH_CONTRIBUTOR_START = "FETCH_CONTRIBUTOR_START";
export const FETCH_CONTRIBUTOR_SUCCESS = "FETCH_CONTRIBUTOR_SUCCESS";
export const FETCH_CONTRIBUTOR_ERROR = "FETCH_CONTRIBUTOR_ERROR";

const fetchContributorStart = () => {
  return { type: FETCH_CONTRIBUTOR_START };
};

const fetchContributorSuccess = (data) => {
  return { type: FETCH_CONTRIBUTOR_SUCCESS, payload: data };
};

const fetchContributorError = (error) => {
  return { type: FETCH_CONTRIBUTOR_ERROR, payload: error };
};

const fetchContributor = (owner, repo) => {
  return async (dispatch) => {
    try {
      dispatch(fetchContributorStart());
      const { data } = await fetchContributorAPI(owner, repo);
      if (data && data.length > 0) dispatch(fetchContributorSuccess(data));
      else dispatch(fetchContributorSuccess([]));
    } catch (error) {
      dispatch(fetchContributorError(error));
    }
  };
};

export default fetchContributor;
