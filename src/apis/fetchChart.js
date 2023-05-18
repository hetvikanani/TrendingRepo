import base_url from "./const";
import axios from "axios";

const fetchChartAPI = async (owner, repo) => {
  const url = base_url + `/repos/${owner}/${repo}/stats/code_frequency`;

  return axios.get(url, {
    headers: {
      Authorization: "Bearer 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",
    },
  });
};

export default fetchChartAPI;
