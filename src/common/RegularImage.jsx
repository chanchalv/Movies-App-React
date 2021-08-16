import React, {useState} from 'react';
import MovieFilterCard from './MovieFilterCard';
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
const classes = {useStyles};
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [genre, setGenre] = React.useState([]);
  const [artist, setArtist] = React.useState([]);

  const handleGenreChange = (event) => {
    console.log(event.target.value);
    setGenre(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const getFilteredOnGenre = (movies) => {
    if (genre.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      for (let i = 0; i < movie.genres.length; i++) {
        if (genre.includes(movie.genres[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const getFilteredOnArtists = (movies) => {
    if (artist.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      let movieArtists = movie.artists.map(
        (artist) => artist.first_name + "" + artist.last_name
      );
      for (let i = 0; i < movieArtists.length; i++) {
        if (artist.includes(movieArtists[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const handleFilter = () => {
    console.log(genre, artist);
    const filteredOnGenre = getFilteredOnGenre(moviesData);
    const filteredOnArtist = getFilteredOnArtists(filteredOnGenre);
    setFilteredMovies(filteredOnArtist);
  };
  return (
    <div className={classes.root}>
      <ImageList rowHeight={360} className={classes.imageList} cols={4}>
        {filteredMovies.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1}>
            <img src={item.poster_url} alt={item.title} className="moviesImages"/>
            
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Dates: {item.release_date} </span>}
            />
          </ImageListItem>
        ))
        }
      </ImageList>
     
    </div>
    
  );
}
