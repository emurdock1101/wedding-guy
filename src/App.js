import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const [firstColor, setFirstColor] = useState("rbg(255,255,255)");
  const [secondColor, setSecondColor] = useState("rbg(255,255,255)");
  const [thirdColor, setThirdColor] = useState("rbg(255,255,255)");
  const [fourthColor, setFourthColor] = useState("rbg(255,255,255)");
  const [fifthColor, setFifthColor] = useState("rbg(255,255,255)");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({model: "default" }),
    })
      .then((res) => res.json())
      .then((response) => {
        let clrs = response.result;
        setFirstColor(
          "rgb(" + clrs[0][0] + "," + clrs[0][1] + "," + clrs[0][2] + ")"
        );
        setSecondColor(
          "rgb(" + clrs[1][0] + "," + clrs[1][1] + "," + clrs[1][2] + ")"
        );
        setThirdColor(
          "rgb(" + clrs[2][0] + "," + clrs[2][1] + "," + clrs[2][2] + ")"
        );
        setFourthColor(
          "rgb(" + clrs[3][0] + "," + clrs[3][1] + "," + clrs[3][2] + ")"
        );
        setFifthColor(
          "rgb(" + clrs[4][0] + "," + clrs[4][1] + "," + clrs[4][2] + ")"
        );
        setIsLoading(false);
      });
    
  }, []);

  let theme = createTheme({
    palette: {
      first: firstColor,
      second: secondColor,
      third: thirdColor,
      fourth: fourthColor,
      fifth: fifthColor,
    },
    typography: {
      fontSize: 16,
      h3: {
        fontWeight: 700,
        fontSize: "2.2rem",
      },
      h4: {
        fontWeight: 700,
        fontSize: "1.75rem",
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
  });

  return (
    <div>
      {!isLoading && (
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/projects" component={About} exact />
            <Route component={Error} />
          </Switch>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
