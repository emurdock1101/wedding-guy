// MUI
import {makeStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';

// views
import Home from './views/Home';
import Details from './views/Details';
import ErrorPage from './views/Error';
import Gallery from './views/Gallery';
// other
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {theme} from './theme';
import Footer from './components/Footer';
import * as content from './constants/content';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'block',
    position: 'relative',
    paddingBottom: 50,
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accomodations' element={<Details {...content.accomodations} />} />
          <Route path='/faqs' element={<Details {...content.faqs} />} />
          <Route path='/ourstory' element={<Details {...content.ourstory} />} />
          <Route path='/gallery' element={<Gallery {...content.gallery} />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<Navigate to='/error' replace />} />
        </Routes>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
