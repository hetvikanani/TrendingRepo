import base_url from "./const";
import axios from "axios";

const fetchContributorAPI = async (owner, repo) => {
  const url = base_url + `/repos/${owner}/${repo}/stats/contributors`;

  return axios.get(url);
};

export default fetchContributorAPI;
