import {makeStyles} from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {galleryData} from '../constants/gallery-content';

const GalleryGrid = () => {
  const useStyles = makeStyles((theme) => ({
    imageList: {
      border: '1px solid blue',
    },
    imgDetails: {
      marginTop: 20,
      marginBottom: 20,
      border: '1px solid green',
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
  }));
  const classes = useStyles();

  return (
    <ImageList className={classes.imageList} cols={4} rowHeight={450}>
      {galleryData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} loading='lazy' />

          <div className={classes.imgDetails}>
            <a href={item.url} className={classes.titleLink}>
              {item.title}
            </a>
            <p className={classes.description}>{item.description}</p>
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryGrid;
