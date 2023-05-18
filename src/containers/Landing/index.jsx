import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

import { fetchRepo } from "../../redux/repo/actions";
import RepoList from "../../components/RepoList";
import DatePicker from "../../components/DatePicker";
import Loading from "../../components/Loading";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(7);
  const [expanded, setExpanded] = useState("");

  const { loading, data, error } = useSelector((state) => ({
    loading: state.repo.loading,
    data: state.repo.data,
    error: state.repo.error,
  }));

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setPage((prePage) => prePage + 1);
      dispatch(fetchRepo(page + 1, date, true));
    }
  }, [date, page, dispatch]);

  const handleExpanded = (key) => {
    setExpanded(key);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    dispatch(fetchRepo(0, date));
  }, [dispatch, date]);

  console.error(error);

  return (
    <>
      <div
        // TODO
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography variant="h3" gutterBottom>
            Github Repo
          </Typography>
        </div>
        <DatePicker value={date} handleChange={setDate} />
      </div>
      {loading && <Loading />}
      {data?.map((repo, index) => (
        <RepoList
          key={index}
          repo={repo}
          expanded={expanded}
          handleExpanded={handleExpanded}
        />
      ))}
    </>
  );
};

export default LandingPage;
