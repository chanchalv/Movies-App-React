import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from './moviesData';
import './movies.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={360} className={classes.imageList} cols={4}>
        {moviesData.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1}>
            <img src={item.poster_url} alt={item.title} className="moviesImages" />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Dates: {item.release_date}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
