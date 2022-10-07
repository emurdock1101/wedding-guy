import "./App.css";
import { makeStyles } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import HeaderDrawer from "./components/HeaderDrawer";
import About from "./views/About";
import Contact from "./views/Contact";
import FAQs from "./views/Faqs";
import ErrorPage from "./views/Error";
import Home from "./views/Home";
import Loading from "./components/Loading";
import PreTest from "./views/PreTest";
import Privacy from "./views/Privacy";
import Quiz from "./views/Quiz";
import Results from "./views/Results";
import Submit from "./views/Submit";
import BuyTest from "./views/BuyTest";
import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Login from "./views/Login";
import Footer from "./components/Footer";
import Signup from "./views/Signup";

Amplify.configure(awsconfig);

function App() {
  const useStyles = makeStyles((theme) => ({
    footer: {
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
    container: {
      minHeight: "100vh" /* will cover the 100% of viewport */,
      overflow: "hidden",
      display: "block",
      position: "relative",
      paddingBottom: 120,
    },
  }));
  const [loggedIn, setLoggedIn] = React.useState(false);
  const styles = useStyles();
  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log(res);
        console.log("logged in");
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("not logged in");
        setLoggedIn(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <HeaderDrawer loggedIn={loggedIn} onLogOut={assessLoggedInState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/submit" element={<Submit prevStep={() => {}} nextStep={() => {}} />} />
          <Route path="/pretest" element={<PreTest nextStep={() => {}} />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/buy" element={<BuyTest />} />
          <Route path="/login" element={<Login onLogIn={assessLoggedInState} />} />
          <Route path="/signup" element={<Signup onSignUp={assessLoggedInState} />} />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
