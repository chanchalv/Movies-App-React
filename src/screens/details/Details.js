import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BasicImageList from '../../common/RegularImage';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {
                genres: [],
                trailer_url: "",
                artists: []
            },
            starIcons: [{
                id: 1,
                stateId: "star1",
                color: "black"
            },
            {
                id: 2,
                stateId: "star2",
                color: "black"
            },
            {
                id: 3,
                stateId: "star3",
                color: "black"
            },
            {
                id: 4,
                stateId: "star4",
                color: "black"
            },
            {
                id: 5,
                stateId: "star5",
                color: "black"
            }]
        }
    }


    render() {
       
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
                <Header />
                <BasicImageList />
                <div className="back-to-home">
                    <Typography>
                        Back to Home
                    </Typography>
                </div>
                <div className="flex-container-Details">
                    <div className="left-part">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>

                    <div className="middle-part">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title} </Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="highlight-text">Genres: </span> {movie.genres.join(', ')}
                            </Typography>
                        </div>
                        <div>
                            <Typography><span className="highlight-text">Duration:</span> {movie.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="highlight-text">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="highlight-text"> Rating:</span> {movie.critics_rating}  </Typography>
                        </div>
                        <div className="combination">
                            <Typography><span className="highlight-text">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography>
                                <span className="highlight-text">Trailer:</span>
                            </Typography>
                           
                        </div>
                    </div>

                    <div className="right-part">
                        <Typography>
                            <span className="highlight-text">Rate this movie: </span>
                        </Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"star" + star.id}
                                onClick={() => this.starClickHandler(star.id)}
                            />
                        ))}

                        <div className="combination>
                            <Typography>
                                <span> Artists:</span>
                            </Typography>
                        </div>
                        <div className="rightDimensions>
                            <GridList cellHeight={160} cols={2}>
                                {movie.artists != null && movie.artists.map(artist => (
                                    <GridListTile
                                        className="gridTile"
                                        onClick={() => this.artistClickHandler(artist.wiki_url)}
                                        key={artist.id}>
                                        <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                        <GridListTileBar
                                            title={artist.first_name + " " + artist.last_name}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Details;