import base_url from "./const";
import axios from "axios";

const fetchRepoAPI = async (page, date) => {
  const url =
    base_url +
    `/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;

  return axios.get(url);
};

export default fetchRepoAPI;
