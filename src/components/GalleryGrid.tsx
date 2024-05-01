import {makeStyles} from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {galleryData} from '../content/gallery-content';
import {useEffect, useState} from 'react';
const useStyles = makeStyles((theme) => ({
  imageList: {
    overflow: 'hidden',
  },
  titleLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  description: {
    wordBreak: 'break-word',
  },
  subtitle: {
    marginBottom: 5,
    fontSize: 14,
  },
}));

const calcNumOfCols = () => {
  if (window.innerWidth < 750) {
    return 1;
  } else if (window.innerWidth < 1000) {
    return 2;
  }
  return 4;
};

const GalleryGrid = () => {
  const [numberOfColumns, setNumberOfColumns] = useState(calcNumOfCols());
  const classes = useStyles();

  const handleResize = () => {
    setNumberOfColumns(calcNumOfCols());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <ImageList className={classes.imageList} cols={numberOfColumns}>
      {galleryData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} loading='lazy' />
          <ImageListItemBar
            className={classes.description}
            title={
              <a href={item.url} className={classes.titleLink}>
                {item.title}
              </a>
            }
            subtitle={<p className={classes.subtitle}>{item.description}</p>}
            position='below'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryGrid;
