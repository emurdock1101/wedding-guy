import './App.css';
import {makeStyles} from '@material-ui/core';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import ErrorPage from './views/Error';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './theme';
import Footer from './components/Footer';
import * as content from './constants/content';

function App() {
  const useStyles = makeStyles((theme) => ({
    container: {
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'block',
      position: 'relative',
      paddingBottom: 0,
    },
    footer: {
      bottom: 0,
      position: 'absolute',
      width: '100%',
    },
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accomodations' element={<Details {...content.accomodations} />} />
          <Route path='/faqs' element={<Details {...content.accomodations} />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<Navigate to='/error' replace />} />
        </Routes>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
