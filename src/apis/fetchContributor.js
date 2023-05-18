import base_url from "./const";
import axios from "axios";

const fetchContributorAPI = async (owner, repo) => {
  const url = base_url + `/repos/${owner}/${repo}/stats/contributors`;

  return axios.get(url, {
    headers: {
      Authorization: "Bearer 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",
    },
  });
};

export default fetchContributorAPI;
