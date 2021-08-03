import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { ImageListItemBar } from '@material-ui/core';
import moviesData from './moviesData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  ImageListItem: {
    height: '250px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} cols={6} className={classes.imageList}>
        {moviesData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Rating: {item.critics_rating}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
