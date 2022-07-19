import "./App.css";

import { Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
