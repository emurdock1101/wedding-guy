import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Quiz from "./components/Quiz/quiz";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function App() {
  return (
    // add 404 page here
    <div style={{backgroundColor: theme.palette.cream}}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quiz" component={Quiz} exact />
          <Route component={Error} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
