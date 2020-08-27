import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
