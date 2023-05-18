import base_url from "./const";
import axios from "axios";

const fetchRepoAPI = async (page, date) => {
  const url =
    base_url +
    `/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;

  return axios.get(url, {
    headers: {
      Authorization: "Bearer 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",
    },
  });
};

export default fetchRepoAPI;
