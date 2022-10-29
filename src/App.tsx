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
import { questionData as qd } from "./constants/questionData";
import { shuffle } from "./util";
import { Storage } from "@aws-amplify/storage";
import Submit from "./views/Submit";
import PreTest from "./views/PreTest";

Amplify.configure(awsconfig);

function App() {
  const questionData = shuffle(qd);

  const useStyles = makeStyles((theme) => ({
    footer: {
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
    container: {
      minHeight: "100vh" /* will cover the 100% of viewport */,
      display: "block",
      position: "relative",
      paddingBottom: 120,
    },
  }));

  const [loggedIn, setLoggedIn] = useState(false);
  const [completed, setCompleted] = useState(false);

  const styles = useStyles();
  const assessLoggedInState = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setLoggedIn(true);
    } catch (error) {
      setLoggedIn(false);
    }
  };

  // choose the screen size
  const getResultsFromS3 = async (): Promise<void> => {
    const user = await Auth.currentAuthenticatedUser();
    const email: string = user.attributes?.email ?? "";
    const subId: string = user.attributes?.sub ?? "";

    Storage.configure({
      bucket: process.env.APP_bucket_name ?? "big5-amplify-test-results-bucket210923-dev",
      level: "private",
      region: process.env.APP_region ?? "us-east-1",
    });
    try {
      const url: string = await Storage.get(`${email}-${subId}/${email}-results`);
      await fetch(url).then((response) => response.json());
      setCompleted(true);
    } catch (error) {
      setCompleted(false);
    }
  };

  const completeTest = () => {
    setCompleted(true);
  };

  // Check for login
  useEffect(() => {
    assessLoggedInState();
  }, []);

  // Check for bucket item
  useEffect(() => {
    getResultsFromS3();
  }, [loggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <HeaderDrawer loggedIn={loggedIn} completed={completed} onLogOut={assessLoggedInState} />
        <Routes>
          <Route path="/buy" element={!loggedIn ? <BuyTest /> : <Navigate to="/" replace />} />
          {/* <Route
            path="/test"
            element={
              loggedIn && !completed ? (
                <Quiz onComplete={completeTest} questionData={questionData} />
              ) : (
                <Navigate to="/" replace/>
              )
            }
          /> */}
          <Route
            path="/test"
            element={<Quiz onComplete={completeTest} questionData={questionData} />}
          />
          {/* <Route path="/results" element={completed ? <Results /> : <Navigate to="/" replace />} /> */}
          <Route path="/results" element={<Results />} />
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
          <Route path="/" element={<Home loggedIn={loggedIn} completed={completed} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/checkouterror" element={<CheckoutErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />


          <Route
            path="/pretest"
            element={<PreTest nextStep={()=> {}}/>}
          />
          <Route
            path="/submit"
            element={<Submit onComplete={()=> {}} prevStep={()=> {}}/>}
          />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
