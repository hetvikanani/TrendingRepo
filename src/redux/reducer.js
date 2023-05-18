import { combineReducers } from "redux";
import repoReducer from "./repo/reducer";
import chartReducer from "./chart/reducers";
import contributorReducer from "./contributor/reducer";

const rootReducer = combineReducers({
  repo: repoReducer,
  chart: chartReducer,
  contributor: contributorReducer,
});

export default rootReducer;
