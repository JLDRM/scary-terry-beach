import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/Store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
