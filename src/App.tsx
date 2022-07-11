import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Results from "./views/Results";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function App() {
  return (
    // add 404 page here
    <div>
      <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={Results} exact />
        <Route path="/quiz" component={Quiz} exact />
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
