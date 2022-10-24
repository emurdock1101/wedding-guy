import "./App.css";
import { makeStyles } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";
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
// import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Login from "./views/Login";
import Footer from "./components/Footer";
import Signup from "./views/Signup";
import Purchase from "./views/Purchase";
import CheckoutErrorPage from "./views/CheckoutError";
import Forgot from "./views/Forgot";

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
  const [completed, setCompleted] = React.useState(false);
  const [results, setResults] = React.useState(undefined);

  const styles = useStyles();
  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log(res);
        console.log("logged in");
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("logged out");
        setLoggedIn(false);
      });
  };

  const assessCompletedState = () => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log(res);
        console.log("logged in");
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("logged out");
        setLoggedIn(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <HeaderDrawer loggedIn={loggedIn} completed={completed} onLogOut={assessLoggedInState} />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />} />
          <Route
            path="/test"
            element={!loggedIn || completed ? <Navigate to="/results" replace /> : <Quiz />}
          />
          {/* <Route
            path="/results"
            element={!loggedIn || !completed ? <Navigate to="/" replace /> : <Results />}
          /> */}
          <Route
            path="/results"
            element={<Results />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/checkouterror" element={<CheckoutErrorPage />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* <Route
            path="/pretest"
            element={
              !loggedIn || completed ? <Navigate to="/" replace /> : <PreTest nextStep={() => {}} />
            }
          /> */}
          <Route
            path="/pretest"
            element={
              <PreTest nextStep={() => {}} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={completed ? <Navigate to="/" replace /> : <BuyTest />} />
          <Route path="/login" element={<Login onLogIn={assessLoggedInState} />} />
          <Route path="/signup" element={<Signup onLogIn={assessLoggedInState} />} />
          <Route
            path="/purchased"
            element={!loggedIn ? <Navigate to="/" replace /> : <Purchase loggedIn={loggedIn} />}
          />
          <Route
            path="/reset"
            element={
              loggedIn ? <Navigate to="/" replace /> : <Forgot onLogIn={assessLoggedInState} />
            }
          />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
//<Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />

export default App;
