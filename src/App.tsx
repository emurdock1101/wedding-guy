import "./App.css";
import { makeStyles } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";
import HeaderDrawer from "./components/HeaderDrawer";
import About from "./views/About";
import Contact from "./views/Contact";
import FAQs from "./views/Faqs";
import ErrorPage from "./views/Error";
import Home from "./views/Home";
import Privacy from "./views/Privacy";
import Quiz from "./views/Quiz";
import Results from "./views/Results";
import BuyTest from "./views/BuyTest";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import Login from "./views/Login";
import Footer from "./components/Footer";
import Signup from "./views/Signup";
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

  const [loggedIn, setLoggedIn] = useState(false);
  const [completed, setCompleted] = useState(false);

  const styles = useStyles();
  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log("logged in: " + JSON.stringify(res));
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("logged out");
        setLoggedIn(false);
      });
  };

  const completeTest = () => {
    console.log("test completed");
    setCompleted(true);
  };

  useEffect(() => {
    assessLoggedInState();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <HeaderDrawer loggedIn={loggedIn} completed={completed} onLogOut={assessLoggedInState} />
        <Routes>
          <Route path="/buy" element={!loggedIn ? <BuyTest /> : <Navigate to="/" replace />} />
          <Route
            path="/test"
            element={
              loggedIn && !completed ? (
                <Quiz onComplete={completeTest} />
              ) : (
                <Navigate to="/results" replace />
              )
            }
          />
          <Route
            path="/results"
            element={loggedIn && completed ? <Results /> : <Navigate to="/" replace />}
          />
          <Route
            path="/reset"
            element={
              !loggedIn ? <Forgot onLogIn={assessLoggedInState} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/login"
            element={
              !loggedIn ? <Login onLogIn={assessLoggedInState} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/signup"
            element={
              !loggedIn ? <Signup onLogIn={assessLoggedInState} /> : <Navigate to="/" replace />
            }
          />
          <Route path="/" element={<Home loggedIn={loggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/checkouterror" element={<CheckoutErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
