import GlobalStyle from "./utils/styles/GlobalStyle";
import Helmet from "react-helmet";
import React from "react";
import Routes from "./routing/Routes";
import theme from "./theme";
import { ThemeProvider } from "styled-components/macro";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Helmet>
        <meta charSet="utf-8" />

        <title>Copay</title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
// todo: routing
// todo: route switch component
