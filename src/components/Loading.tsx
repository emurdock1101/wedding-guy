import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loading: {
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
}));

const Loading: React.FC = () => {
  const styles = useStyles();
  return (
    <Box sx={{display: 'flex'}} className={styles.loading}>
      <CircularProgress size={200} color='primary' style={{color: '#00C9B7'}} />
    </Box>
  );
};

export default Loading;
