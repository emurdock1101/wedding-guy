import "./App.css";

import { Route, Routes } from "react-router-dom";

import Contact from "./views/Contact";
import Fourohfour from "./views/Error";
import Home from "./views/Home";
import PageShell from "./components/PageShell";
import Privacy from "./views/Privacy";
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
          <Route path="/results" element={<Results />} />
          <Route path="/shell" element={<PageShell pageTitle="The Team" />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<Fourohfour />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
