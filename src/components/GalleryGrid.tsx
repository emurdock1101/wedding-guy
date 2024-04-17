import {makeStyles} from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {galleryData} from '../constants/gallery-content';
import {useEffect, useState} from 'react';

const GalleryGrid = () => {
  const [numberOfColumns, setNumberOfColumns] = useState(4);
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
  const classes = useStyles();

  const handleResize = () => {
    if (window.innerWidth < 750) {
      console.log('window.innerWidth < 750', JSON.stringify(window.innerWidth < 750), '\n');

      setNumberOfColumns(2);
    } else if (window.innerWidth < 1000) {
      setNumberOfColumns(3);
    } else setNumberOfColumns(4);
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
