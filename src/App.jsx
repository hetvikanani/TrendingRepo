import { Provider } from "react-redux";

import store from "./redux/store.js";
import LandingPage from "./containers/Landing";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
};

export default App;
