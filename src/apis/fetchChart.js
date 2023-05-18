import base_url from "./const";
import axios from "axios";

const fetchChartAPI = async (owner, repo) => {
  const url = base_url + `/repos/${owner}/${repo}/stats/code_frequency`;

  return axios.get(url);
};

export default fetchChartAPI;
